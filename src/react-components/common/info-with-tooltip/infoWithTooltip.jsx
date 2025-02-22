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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { getIsTabletView } from 'react-components/utils/utils.js';
import styles from './infoWithTooltip.scss';

const cx = classNames.bind(styles);

const InfoWithTooltip = ({ className, children, tooltip, onClick }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const onHover = () => {
    if (getIsTabletView()) {
      return;
    }
    setIsTooltipVisible(true);
  };

  return (
    <div
      className={cx('info', className, { active: isTooltipVisible })}
      onMouseOver={onHover}
      onMouseOut={() => setIsTooltipVisible(false)}
      onClick={onClick}
    >
      {typeof children === 'function' ? children(isTooltipVisible) : children}
      <div className={cx('hover-area', { visible: isTooltipVisible })}>
        <div className={cx('tooltip')}>{tooltip}</div>
      </div>
    </div>
  );
};

InfoWithTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  tooltip: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
InfoWithTooltip.defaultProps = {
  className: '',
  children: null,
  onClick: () => null,
};

export default InfoWithTooltip;
