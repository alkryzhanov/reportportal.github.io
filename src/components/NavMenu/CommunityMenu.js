import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { GithubCover } from './covers/GithubCover';
import { HeartIcon } from './icons/HeartIcon';
import { ForkIcon } from './icons/ForkIcon';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';

import './Menu.scss';

export const CommunityMenu = () => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const contributionCard = (
    <SectionCard
      className="contribution-card"
      title="Github Contribution"
      cover={<GithubCover />}
      text="Our team makes ReportPortal, but it’s our community that shapes and develops it better."
    >
      <div className={getBlocksWith('__btn-group')}>
        <button
          type="button"
          className={cx(
            getBlocksWith('__btn-action'),
            getBlocksWith('__btn-action--outline'),
            getBlocksWith('__btn-action--full-width'),
          )}
        >
          <ForkIcon />
          Fork
        </button>
        <button
          type="button"
          className={cx(
            getBlocksWith('__btn-action'),
            getBlocksWith('__btn-action--outline'),
            getBlocksWith('__btn-action--full-width'),
          )}
        >
          <HeartIcon />
          Sponsor
        </button>
      </div>
    </SectionCard>
  );

  const communityList = (
    <SectionList
      className={cx('section-list--secondary', 'community-list')}
      title="Join the Community"
      items={[
        {
          iconClass: 'slack',
          title: 'Slack',
        },
        {
          iconClass: 'twitter',
          title: 'Twitter',
        },
        {
          iconClass: 'youtube',
          title: 'Youtube',
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>By subscribing, you agree</div>
    </div>
  );

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body')}>
          <div className={getBlocksWith('__body-row')}>
            <div className={getBlocksWith('__body-col--lf')}>{contributionCard}</div>
            <div
              className={cx(
                getBlocksWith('__body-col--rt'),
                getBlocksWith('__body-col--flex-column'),
              )}
            >
              {communityList}
            </div>
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
};
