/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import classNames from 'classnames/bind';
import appImg from './img/app.png';
import elasticSearchImg from './img/elasticSearch.png';
import performanceImg from './img/performance.png';
import responseTimesImg from './img/responseTimes.png';
import storageImg from './img/storage.png';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';
import List from '../common/list/list';
import Notice from '../common/notice/notice';
import Notes from '../common/notes/notes';
import styles from './elasticBlogPage.scss';

const cx = classNames.bind(styles);

const transition = [
  'ReportPortal v5.7 is the last version with log storage in PostgreSQL.',
  'ReportPortal v5.7.2 is the version with a double logging mechanism: logs are stored both in PG and Elastic at the moment of entry.',
  'ReportPortal v5.8 is the version with logs storage in Elastic only.',
];

const elasticSearchBenefits = [
  <>Reduced disk space usage, with a smaller footprint <b>up to x8.5.</b></>,
  <>Reduced maintenance of the PostgreSQL database, and reduced requirements for the shape sizes by at <b>least x2 times.</b></>,
  <>Reduction of database load used by pattern analysis up to <b>5x times.</b></>,
  'Full-text search capabilities for text logs (x33 times quicker for text queries, and less CPU utilization 1 – 16x times in comparison with PostgreSQL).',
  'Similar performance with PostgreSQL on getting logs by ID.',
  'Storing logs in different indices per project allows to get project data faster and reduces the risks of locks occurrence.',
];

const dataStreamsBenefits = [
  <>Logs deletion by IDs is <b>x29 times faster</b> in data streams compared to Indices.</>,
  'Fast logs insertion (reporting) at the time of the high workload.',
  'Creation of cheap data nodes for old data, e.g., HDD with low resources. ElasticSearch allows configuring the old data storage using ILM (Index Lifetime Management) policy. It might be useful, for example, if your project uses some information once per week/month, etc.',
  'Various index rollover conditions – fast creation of the new generation. It means that a new generation of this data stream is created when the limit is reached (by logs count, by logs amount, by date). So, logs of this data stream proceed to the new generation. Limits can be specified in the IML policy per project.',
];

const notes = [
  'Before version 5.8, double logging might increase the resources usage – CPU, disk space.',
  'We are already using the ElasticSearch license, so, no new license is required. For now, we stay on version 7.10 with Apache 2.0. We might switch to OpenSearch in prospect.',
];

const ElasticBlogPage = () => (
  <>
    <BlogPageHeader tags={['article', 'elasticsearch', 'datastreams']} date={'September 5, 2022'} />
    <BlogPageContent title={'ReportPortal moves test logs from PostgreSQL to Elastic-type engines'}>
      <p>
        The ReportPortal’s essence is based on assistance in working with automated testing results, and it all starts with the aggregation of results at a single place. For a long time, the relational database served well as a storage place for us. But the more test cases you run, the more storage you need to keep all related logs.
      </p>
      <p>
        Before we introduced PostgreSQL with ReportPortal v5.0, we were using MongoDB from version 1 to version 4. MongoDB is a document-oriented non-relational database, was pretty good at writing the logs, but was a kind of nightmare to track metrics, build charts and find insights across testing results.
      </p>
      <p>
        PostgreSQL resolved data joins for us and made implementing new features much easier and quicker. But it also brought some drawbacks: such as excessive disk space usage to keep and rotate logs, slowdowns on data inserting, high CPU loads on data deletion and constant required maintenance (VACUUM clean).
      </p>
      <p>
        There are several reasons why <a target="_blank" href="https://dba.stackexchange.com/questions/123627/postgresql-data-files-have-size-more-than-data-itself" rel="noreferrer">PostgreSQL uses more disk space than the data itself</a>, and it comes mainly from indexes of the data and several copies of the same data, due to specifics of PostgreSQL mechanics.
      </p>
      <p>
        Logs are a big portion of data inside ReportPortal. And assuming specifics of the workflow associated with it, it should be constantly added and deleted, without much of the need to keep it for a long time. Even ReportPortal’s Machine Learning in Auto-Analysis feature will use it just several times for training and will store it transformed inside the ML model. But constant insertions and deletions will produce a significant load and innumerous storage footprint.
      </p>
      <p>
        By reconsidering all pros and cons, we made a deep investigation and performance analysis of ElasticSearch vs PostgreSQL from the perspective of ReportPortal’s load model and nature of data. The results of this investigation go below in this article.
      </p>
      <p>
        Assuming these results, our architectural decision was to switch logs storage from PostgreSQL to ElasticSearch, well… because we already have it as a part of our application. And since it gives us such benefits as <b>reduced storage footprint up to 8.5x times</b>, and <b>data deletion up to 29x times quicker</b> with just a fraction of the CPU load.
      </p>
      <p>
        And also, it opens up the capabilities of the full-text search!
      </p>
      <p>
        Please read our findings below.
      </p>
      <h3>
        Smooth transition of logs from PostgreSQL to ElasticSearch Data Streams
      </h3>
      <List
          title={'To minimize the effort of our users with data migration, we decided to introduce the interim version (5.7.2) with double-logging. Here is how it looks in the version:'}
          list={transition}
      />
      <p>
        The average time frame of 3 months between releases will give time for Elastic to pre-aggregate enough data for a smooth daily routine. The upgrade to the version 5.8 will turn off the logs in PostgreSQL and clean it up. Along with the v5.8 we will still release the migration scripts, which will do most of the work automatically. But in order to minimize downtime, we recommend you use 5.7.2 for a while.
      </p>
      <p>
        Hence, version 5.7.2 has the ability to enable double entry, but this is disabled in default configuration. The reason of doing so is to prevent issues related to the elastic failures, since it has to be re-shaped before accessing all logs. We plan to share instructions along with v5.8. Thus, by default in 5.7.2 log messages will be stored in PostgreSQL only. Double logging will become active if there are configured settings for ElasticSearch in both `service-api` and `service-jobs` services. Please, note that configurations must be added or absent for both services. Nevertheless, a full migration of logs to ElasticSearch is planned in version 5.8.
      </p>
      <p>
        Here is some visual representation for reference.
      </p>
      <img src={appImg} alt="report portal app" />
      <h3>
        Why ElasticSearch?
      </h3>
      <p>
        PostgreSQL was previously used as a database for log storage, but – according to the performance tests – this is not the most effective way. Log messages take up the most space in the database, so we decided to transfer them to ElasticSearch. Logs migration to ElasticSearch will significantly reduce storage occupied by the log table. It will improve overall database performance (timings and costs of infrastructure).
      </p>
      <p>
        In version 5.8 ReportPortal will still rely on ElasticSearch v7.10, as the last available version under Apache 2.0 license. And going forward we will consider Elastic-like solutions and forks, but this will come into play after a series of performance analyses and investigations. So please stay tuned, we know that it could be an issue for some of our users, but in order to avoid hasty decisions we have to make it incrementally.
      </p>
      <img src={elasticSearchImg} alt="elasticSearch" />
      <h3>
        What would you get with the ReportPortal v5.8 and the switch to the ElasticSearch logging?
      </h3>
      <List
          title={'It’s not something that you will see at the first moment, but definitely will benefit you in the long run, with outcomes like:'}
          list={elasticSearchBenefits}
          isSimple
      />
      <img src={storageImg} alt="rows of logs and storage usage" />
      <Notice>
          ElasticSearch is lower by storage up to <span className={cx('blue', 'big')}>8.5x</span> times.
      </Notice>
      <h3>
        Why we use Data Streams?
      </h3>
      <p>
        Elasticsearch provides a special approach for storing log data: <i>“A data stream lets you store append-only time series data across multiple indices while giving you a single named resource for requests. Data Streams are well-suited for logs, events, metrics, and other continuously generated data,”</i> – described in the <a target="_blank" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/data-streams.html#data-streams" rel="noreferrer">official elastic search documentation.</a>
      </p>
      <h3>
        Data Streams benefits
      </h3>
      <List
        list={dataStreamsBenefits}
        isSimple
      />
      <img src={responseTimesImg} alt="response times over time" />
      <h4>
        Response times table (95pct)
      </h4>
      <table className={cx('table')}>
        <tr>
          <th>Source</th>
          <th>Mean</th>
          <th>Max</th>
          <th>Min</th>
        </tr>
        <tr>
          <td className={cx('blue-cell')}>Data Stream</td>
          <td className={cx('blue-cell')}>23.5 ms</td>
          <td>2.93 s</td>
          <td>10 ms</td>
        </tr>
        <tr>
          <td className={cx('blue-cell')}>Index</td>
          <td className={cx('blue-cell', 'red')}>632 ms</td>
          <td>2.879 s</td>
          <td>79 ms</td>
        </tr>
      </table>
      <img src={performanceImg} alt="deletion by IDs performance comparison" />
      <Notice>
        In comparison with index, logs deletion by IDs from data streams — <b className={cx('blue')}>29 times faster</b>
      </Notice>
      <p className={cx('centered')}>
        You can find more details about ElasticSearch Data Streams <a target="_blank" href='https://opster.com/guides/elasticsearch/data-architecture/elasticsearch-data-streams/' rel="noreferrer">here.</a>
      </p>
      <h3>
        What effort is required from users?
      </h3>
      <p>
        We recommend updating to version 5.7.2 for a smooth transition of full logging to ElasticSearch, especially if you have many logs. If you update to version 5.7.2, use it for 3-4 months before version 5.8. This period will be enough for the vast majority of projects to generate enough logs history inside ElasticSearch. And then update to version 5.8 once it is available. Since all logs will already be stored in ElasticSearch, no efforts will be required to do the migration. Along with version 5.8 we will distribute a migration script and instructions for data migration so that you can easily migrate from the early 5.x version.
      </p>
      <Notes notes={notes} />
      <p>
        To summarize, using of ElasticSearch and Data Streams will bring significant performance benefits.
      </p>
    </BlogPageContent>
  </>
);

export default ElasticBlogPage;
