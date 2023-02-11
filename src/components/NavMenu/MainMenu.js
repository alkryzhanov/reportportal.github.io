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

export const MainMenu = () => {
  const generalList = (
    <div className={cx(styles.generalList)}>
      <p className={cx(styles.generalList__title)}>General</p>
      <div className={cx(styles.generalList__container)}>
        <a href="#" className={cx(styles.generalListLink)}>
          <InstallIcon />
          <span className={cx(styles.generalListLink__title)}>Installation</span>
        </a>
        <a href="#" className={cx(styles.generalListLink)}>
          <ReleaseIcon />
          <span className={cx(styles.generalListLink__title)}>Releases</span>
        </a>
      </div>
    </div>
  );
  const featuresList = (
    <div className={cx(styles.featuresList)}>
      <p className={cx(styles.featuresList__title)}>Features</p>
      <div className={cx(styles.featuresList__container)}>
        <div className={cx(styles.featuresList__col)}>
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
          ].map(({ title, text, icon }) => (
            <a key={title} href="#" className={cx(styles.featuresListLink)}>
              <div className={cx(styles.featuresListLink__body)}>
                {icon}
                <div className={cx(styles.featuresListLink__col)}>
                  <p className={cx(styles.featuresListLink__title)}>{title}</p>
                  <p className={cx(styles.featuresListLink__text)}>{text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className={cx(styles.featuresList__col)}>
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
          ].map(({ icon, title, text }) => (
            <a key={title} href="#" className={cx(styles.featuresListLink)}>
              <div className={cx(styles.featuresListLink__body)}>
                {icon}
                <div className={cx(styles.featuresListLink__col)}>
                  <p className={cx(styles.featuresListLink__title)}>{title}</p>
                  <p className={cx(styles.featuresListLink__text)}>{text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
  const integrationsList = (
    <div className="integrations-list">
      <p className={cx(styles.integrationsList__title)}>Integrations</p>
      <div className={cx(styles.integrationsList__container)}>
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
