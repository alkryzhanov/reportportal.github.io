import React from 'react';

import * as styles from './MainMenu.module.scss';
import cx from 'classnames';
import { PlayIcon } from './icons/PlayIcon';
import { InstallIcon } from './icons/InstallIcon';
import { ReleaseIcon } from './icons/ReleaseIcon';
import { DefectTypeIcon } from './icons/DefectTypeIcon';
import { AiIcon } from './icons/AiIcon';
import { RtAnalyticsIcon } from './icons/RtAnalyticsIcon';
import { QualityGatesIcon } from './icons/QualityGatesIcon';
import { PieChartIcon } from './icons/PieChartIcon';
import { JiraOneIcon } from './icons/JiraOneIcon';
import { JiraTwoIcon } from './icons/JiraTwoIcon';
import { AzureDoIcon } from './icons/AzureDoIcon';
import { RallyIcon } from './icons/RallyIcon';
import { SauceLabsIcon } from './icons/SauceLabsIcon';
import { LdapIcon } from './icons/LdapIcon';
import { SamlIcon } from './icons/SamlIcon';

export const MainMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuDialog}>
        <div className="menu-content">
          <div className={styles.menuBody}>
            <div className={styles.menuBody__row}>
              <div className={cx(styles.menuBody__col, styles.menuBody__colLf)}>
                <div className={cx(styles.generalList)}>
                  <p className={cx(styles.generalList__title)}>General</p>
                  <div className={cx(styles.generalList__container)}>
                    <a href="#" className={cx(styles.generalListLink)}>
                      <span className={cx(styles.generalListLink__icon)}>
                        <InstallIcon />
                      </span>
                      <span className={cx(styles.generalListLink__title)}>Installation</span>
                    </a>
                    <a href="#" className={cx(styles.generalListLink)}>
                      {/* <span className={cx(styles.generalListLink__icon)}> */}
                      <ReleaseIcon />
                      {/* </span> */}
                      <span className={cx(styles.generalListLink__title)}>Releases</span>
                    </a>
                  </div>
                </div>
                <div className={cx(styles.featuresList)}>
                  <p className={cx(styles.featuresList__title)}>Features</p>
                  <div className={cx(styles.featuresList__container)}>
                    <div className={cx(styles.featuresList__col)}>
                      <a href="#" className={cx(styles.featuresListLink)}>
                        <div className={cx(styles.featuresListLink__body)}>
                          <ReleaseIcon />
                          <div className={cx(styles.featuresListLink__col)}>
                            <p className={cx(styles.featuresListLink__title)}>
                              Unified test reporting
                            </p>
                            <p className={cx(styles.featuresListLink__text)}>
                              Get persistent test reporting in a single entry point
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className={cx(styles.featuresListLink)}>
                        <div className={cx(styles.featuresListLink__body)}>
                          <DefectTypeIcon />
                          <div className={cx(styles.featuresListLink__col)}>
                            <p className={cx(styles.featuresListLink__title)}>
                              Categorisation of failures
                            </p>
                            <p className={cx(styles.featuresListLink__text)}>
                              Triage test failures by categorisation of root cause
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className={cx(styles.featuresListLink)}>
                        <div className={cx(styles.featuresListLink__body)}>
                          <AiIcon />
                          <div className={cx(styles.featuresListLink__col)}>
                            <p className={cx(styles.featuresListLink__title)}>
                              AI failure reason detection
                            </p>
                            <p className={cx(styles.featuresListLink__text)}>
                              Reduce your manual efforts for failure triaging with Auto-Analyzer
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={cx(styles.featuresList__col)}>
                      <a href="#" className={cx(styles.featuresListLink)}>
                        <div className={cx(styles.featuresListLink__body)}>
                          <RtAnalyticsIcon />
                          <div className={cx(styles.featuresListLink__col)}>
                            <p className={cx(styles.featuresListLink__title)}>
                              Real-time analytics
                            </p>
                            <p className={cx(styles.featuresListLink__text)}>
                              Save time on early reaction by immediate results availability
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className={cx(styles.featuresListLink)}>
                        <div className={cx(styles.featuresListLink__body)}>
                          <PieChartIcon />
                          <div className={cx(styles.featuresListLink__col)}>
                            <p className={cx(styles.featuresListLink__title)}>
                              Widgets and dashboards
                            </p>
                            <p className={cx(styles.featuresListLink__text)}>
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              Get visibility in QA results and a bird's-eye view on the project
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className={cx(styles.featuresListLink)}>
                        <div className={cx(styles.featuresListLink__body)}>
                          <QualityGatesIcon />
                          <div className={cx(styles.featuresListLink__col)}>
                            <p className={cx(styles.featuresListLink__title)}>Quality gates</p>
                            <p className={cx(styles.featuresListLink__text)}>
                              Automate release decisions with Quality Gates rules
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="see-all-features__row">
                  <a href="#" className={cx(styles.seeAllFeatures__btn)}>
                    See all features
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M6.6 3.7A1 1 0 1 0 5 2.3L0 8l5.1 5.7a1 1 0 1 0 1.5-1.4L3.6 9H14a1 1 0 1 0 0-2H3.6l3-3.3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className={cx(styles.menuBody__col, styles.menuBody__colRt)}>
                <div className="integrations-list">
                  <p className={cx(styles.integrationsList__title)}>Integrations</p>
                  <div className={cx(styles.integrationsList__container)}>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <JiraOneIcon />
                      Jira Server
                    </a>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <JiraTwoIcon />
                      Jira Cloud
                    </a>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <AzureDoIcon />
                      Azure DevOps
                    </a>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <RallyIcon />
                      Rally
                    </a>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <SauceLabsIcon />
                      Sauce Labs
                    </a>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <LdapIcon />
                      LDAP
                    </a>
                    <a href="#" className={cx(styles.integrationsList__link)}>
                      <SamlIcon />
                      SAML
                    </a>
                  </div>
                  <div className="see-all-integrations__row">
                    <a href="#" className={cx(styles.seeAllIntegrations__btn)}>
                      See all integrations
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                        <path
                          fill="#000"
                          fillRule="evenodd"
                          d="M6.6 3.7A1 1 0 1 0 5 2.3L0 8l5.1 5.7a1 1 0 1 0 1.5-1.4L3.6 9H14a1 1 0 1 0 0-2H3.6l3-3.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};
