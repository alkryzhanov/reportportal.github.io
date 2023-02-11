import React from 'react';
import cx from 'classnames';

import { DefectTypeIcon } from './icons/DefectTypeIcon';
import { AiIcon } from './icons/AiIcon';
import { ReportingIcon } from './icons/ReportingIcon';

import * as styles from './MainMenu.module.scss';

export const SolutionsMenu = () => {
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
    </div>
  );

  return (
    <div className={styles.menuDialog}>
      <div className="menu-content">
        <div className={styles.menuBody}>
          <div className={styles.menuBody__row}>
            <div className={cx(styles.menuBody__col, styles.menuBody__colLf)}>{featuresList}</div>
            <div className={cx(styles.menuBody__col, styles.menuBody__colRt)}>
              {integrationsList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
