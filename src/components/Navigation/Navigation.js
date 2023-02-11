import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import cx from 'classnames';

import githubStats from '../../../static/github.json';
import { StarIcon } from './StarIcon';
import { GithubIcon } from './GithubIcon';
import { NavLogoIcon } from './NavLogoIcon';
import { ArrowIcon } from './ArrowIcon';
import { SolutionsMenu, ProductMenu, MenuContainer } from '../NavMenu';

import * as styles from './Navigation.module.scss';

const menusInitialState = {
  product: false,
  solutions: false,
  offerings: false,
  learn: false,
  community: false,
};

export const Navigation = () => {
  const menuLinksRef = useRef(null);
  const [githubCounter, setGithubCounter] = useState(githubStats.repos.reportportal);

  const [menus, updateMenus] = useReducer(
    (prevState, newState) => ({
      ...menusInitialState,
      ...(newState && {
        [newState]: !prevState[newState],
      }),
    }),
    menusInitialState,
  );

  useEffect(() => {
    const fetchGithubStars = () => {
      axios
        .get('https://status.reportportal.io/github/stars')
        .then((response) => response.data)
        .then((data) => setGithubCounter(data.repos.reportportal))
        .catch(console.error);
    };

    fetchGithubStars();
  }, []);

  return (
    <div className="sticky-wrapper">
      <header id="header" className={styles.header}>
        <div className={styles.header__wrapper}>
          <nav className={styles.navigation} aria-label="Main Navigation">
            <Link to="/" className={styles.navigation__logoLink}>
              <NavLogoIcon />
            </Link>
            <ul id="navigation" ref={menuLinksRef} className={styles.navigation__list} role="list">
              <li className={styles.navigation__item}>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.product}
                  aria-controls="#product-menu"
                  onClick={() => updateMenus('product')}
                >
                  <span className="navigation__link-child">Product</span>
                  <span
                    className={cx(styles.navigation__arrow, {
                      [`${styles.navigation__arrowUp}`]: menus.product,
                    })}
                  >
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.product}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <ProductMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.solutions}
                  aria-controls="#solutions-menu"
                  onClick={() => updateMenus('solutions')}
                >
                  <span className="navigation__link-child">Solutions</span>
                  <span
                    className={cx(styles.navigation__arrow, {
                      [`${styles.navigation__arrowUp}`]: menus.solutions,
                    })}
                  >
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.solutions}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <SolutionsMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.offerings}
                  aria-controls="#offerings-menu"
                  onClick={() => updateMenus('offerings')}
                >
                  <span className="navigation__link-child">Offerings</span>
                  <span
                    className={cx(styles.navigation__arrow, {
                      [`${styles.navigation__arrowUp}`]: menus.offerings,
                    })}
                  >
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.offerings}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <SolutionsMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.learn}
                  aria-controls="#learn-menu"
                  onClick={() => updateMenus('learn')}
                >
                  <span className="navigation__link-child">Learn</span>
                  <span
                    className={cx(styles.navigation__arrow, {
                      [`${styles.navigation__arrowUp}`]: menus.learn,
                    })}
                  >
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.learn}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <SolutionsMenu />
                </MenuContainer>
              </li>
              <li>
                <button
                  className={styles.navigation__link}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menus.community}
                  aria-controls="#community-menu"
                  onClick={() => updateMenus('community')}
                >
                  <span className="navigation__link-child">Community</span>
                  <span
                    className={cx(styles.navigation__arrow, {
                      [`${styles.navigation__arrowUp}`]: menus.community,
                    })}
                  >
                    <ArrowIcon />
                  </span>
                </button>
                <MenuContainer
                  isOpen={menus.community}
                  menuLinksRef={menuLinksRef}
                  onClose={() => updateMenus()}
                >
                  <SolutionsMenu />
                </MenuContainer>
              </li>
            </ul>
            <div className={styles.navigation__actions} hidden={!githubCounter}>
              <a
                href="https://github.com/reportportal/reportportal.github.io"
                className={styles.navigation__github}
              >
                <GithubIcon />
                <span className={styles.navigation__githubValue}>
                  <StarIcon />
                  {githubCounter}
                </span>
              </a>
              <div className="navigation__auth">
                <div className="navigation__auth-button-group">
                  <a className={styles.loginButton} href="https://saas.reportportal.io/ui/#login">
                    Log in
                  </a>
                  <a
                    className={styles.signupButton}
                    href="https://saas.reportportal.io/ui/#login?registration=true"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
