import React from 'react';
import cx from 'classnames';

import { PlayIcon } from './icons/PlayIcon';
import { InstallIcon } from './icons/InstallIcon';
import { ReleaseIcon } from './icons/ReleaseIcon';
import { DefectTypeIcon } from './icons/DefectTypeIcon';
import { AiIcon } from './icons/AiIcon';
import { RtAnalyticsIcon } from './icons/RtAnalyticsIcon';
import { QualityGatesIcon } from './icons/QualityGatesIcon';
import { PieChartIcon } from './icons/PieChartIcon';
import { ReportingIcon } from './icons/ReportingIcon';
import { ArrowIcon } from './ArrowIcon';

import * as styles from './MainMenu.module.scss';

export const SectionColumn = ({ title, link = '#', icon, text, className = '' }) => (
  <a key={title} href={link} className={cx(styles.sectionListLink, className)}>
    {icon}
    <div>
      <p className={cx(styles.sectionListLink__title)}>{title}</p>
      {text && <p className={cx(styles.sectionListLink__text)}>{text}</p>}
    </div>
  </a>
);

export const ProductMenu = () => {
  const generalList = (
    <div className={cx(styles.generalList)}>
      <p className={cx(styles.sectionList__title)}>General</p>
      <div className={cx(styles.sectionList__container)}>
        <div className={cx(styles.sectionList__col)}>
          <SectionColumn icon={<InstallIcon />} title="Installation" />
        </div>
        <div className={cx(styles.sectionList__col)}>
          <SectionColumn icon={<ReleaseIcon />} title="Releases" />
        </div>
      </div>
    </div>
  );

  const featuresList = (
    <div className={cx(styles.sectionList)}>
      <p className={cx(styles.sectionList__title, styles.sectionList__titleFeatures)}>Features</p>
      <div className={cx(styles.sectionList__container)}>
        <div className={cx(styles.sectionList__col)}>
          {[
            {
              icon: <ReportingIcon />,
              title: 'Unified test reporting',
              text: 'Get persistent test reporting in a single entry point',
            },
            {
              icon: <DefectTypeIcon />,
              title: 'Categorisation of failures',
              text: 'Triage test failures by categorisation of root cause',
            },
            {
              icon: <AiIcon />,
              title: 'AI failure reason detection',
              text: 'Reduce your manual efforts for failure triaging with Auto-Analyzer',
            },
          ].map((data) => (
            <SectionColumn key={data.title} {...data} />
          ))}
        </div>
        <div className={cx(styles.sectionList__col)}>
          {[
            {
              icon: <RtAnalyticsIcon />,
              title: 'Real-time analytics',
              text: 'Save time on early reaction by immediate results availability',
            },
            {
              icon: <PieChartIcon />,
              title: 'Widgets and dashboards',
              text: 'Get visibility in QA results and a birds-eye view on the project',
            },
            {
              icon: <QualityGatesIcon />,
              title: 'Quality gates',
              text: 'Automate release decisions with Quality Gates rules',
            },
          ].map((data) => (
            <SectionColumn key={data.title} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
  const integrationsList = (
    <div className="integrations-list">
      <p className={cx(styles.sectionList__title)}>Integrations</p>
      <div className={cx(styles.sectionList__container, styles.sectionList__containerSecondary)}>
        {[
          {
            classes: styles.integrationsLink__iconJiraOne,
            title: 'Jira Server',
            link: 'https://reportportal.io/docs/Jira-Server',
          },
          {
            classes: styles.integrationsLink__iconJiraTwo,
            title: 'Jira Cloud',
            link: 'https://reportportal.io/docs/Jira-Cloud',
          },
          {
            classes: styles.integrationsLink__iconAzureDo,
            title: 'Azure DevOps',
            link: 'https://reportportal.io/docs/Azure-DevOps-BTS',
          },
          {
            classes: styles.integrationsLink__iconRally,
            title: 'Rally',
            link: 'https://reportportal.io/docs/Rally',
          },
          {
            classes: styles.integrationsLink__iconSauceLabs,
            title: 'Sauce Labs',
            link: 'https://reportportal.io/docs/Sauce-Labs',
          },
          {
            classes: styles.integrationsLink__iconLdap,
            title: 'LDAP',
            link: 'https://reportportal.io/docs/LDAP-Auth',
          },
          {
            classes: styles.integrationsLink__iconSaml,
            title: 'SAML',
            link: 'https://reportportal.io/docs/Azure-SAML',
          },
        ].map(({ classes, title, link }) => (
          <a key={title} href={link} className={cx(styles.integrationsLink)}>
            <span className={cx(styles.integrationsLink__icon, `${classes}`)} />
            {title}
          </a>
        ))}
      </div>
      <div className="see-all-integrations__row">
        <button className={cx(styles.seeAllIntegrations__btn)}>
          See all integrations
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
  const footer = (
    <div className={cx(styles.menuFooter)}>
      <div className={cx(styles.menuFooter__container)}>
        <div className={cx(styles.btnGroup)}>
          <button type="button" className={cx(styles.btnAction)}>
            Try free trial
          </button>
          <button type="button" className={cx(styles.btnAction, styles.btnActionOutline)}>
            Get a quote
          </button>
        </div>
        <button type="button" className={styles.btnText}>
          <PlayIcon />
          Watch product overview
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.menuDialog}>
      <div className="menu-content">
        <div className={styles.menuBody}>
          <div className={styles.menuBody__row}>
            <div className={cx(styles.menuBody__col, styles.menuBody__colLf)}>
              {generalList}
              {featuresList}
              <div className="see-all-features__row">
                <button className={cx(styles.seeAllFeatures__btn)}>
                  See all features
                  <ArrowIcon />
                </button>
              </div>
            </div>
            <div className={cx(styles.menuBody__col, styles.menuBody__colRt)}>
              {integrationsList}
            </div>
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
};
