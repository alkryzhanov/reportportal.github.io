import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import * as styles from './Navigation.module.scss';
import { StarIcon } from './StarIcon';
import { GithubIcon } from './GithubIcon';
import { NavLogoIcon } from './NavLogoIcon';
import { ArrowIcon } from './ArrowIcon';
import { MainMenu } from '../NavMenu';

export const Navigation = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      githubStars {
        repos {
          reportportal
        }
      }
    }
  `);

  return (
    <div className="sticky-wrapper">
      <header id="header" className={styles.header}>
        <div className={styles.header__wrapper}>
          <nav className={styles.navigation} aria-label="Main Navigation">
            <Link to="/" className={styles.navigation__logoLink}>
              <NavLogoIcon />
            </Link>
            <ul id="navigation" className={styles.navigation__list} role="list">
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-controls="#product-menu"
                >
                  <span className="navigation__link-child">Product</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-controls="#solutions-menu"
                >
                  <span className="navigation__link-child">Solutions</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-controls="#offerings-menu"
                >
                  <span className="navigation__link-child">Offerings</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-controls="#learn-menu"
                >
                  <span className="navigation__link-child">Learn</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-controls="#community-menu"
                >
                  <span className="navigation__link-child">Community</span>
                  <span className={styles.navigation__arrow}>
                    <ArrowIcon />
                  </span>
                </button>
              </li>
            </ul>
            <div className={styles.navigation__actions}>
              <a
                href="https://github.com/reportportal/reportportal.github.io"
                className={styles.navigation__github}
              >
                <GithubIcon />
                <span className={styles.navigation__githubValue}>
                  <StarIcon />
                  {gatsbyRepoData.githubStars.repos.reportportal}
                </span>
              </a>
              <div className="navigation__auth">
                <div className="navigation__auth-button-group">
                  <a className={styles.loginButton} href="#">
                    Log in
                  </a>
                  <a className={styles.signupButton} href="#">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <MainMenu />
    </div>
  );
};
