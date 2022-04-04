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
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './switcher.scss';

const cx = classNames.bind(styles);

const BIG = 'big';
const SMALL = 'small';

const Switcher = ({
  className,
  itemsData,
  handleSelect,
  withItemsEqualWidth,
  withSeparator,
  size,
}) => (
  <div
    className={cx(
      'switcher',
      className,
      size,
      {
        'equal-width': withItemsEqualWidth,
        'with-separator': withSeparator,
      }
    )}
  >
    {itemsData.map(({ id, isActive, element }) => (
      <div
        key={id}
        className={cx('switcher-item', { active: isActive })}
        onClick={() => handleSelect(id)}
      >
        <div className={cx('item')}>
          {element}
        </div>
      </div>
    ))}
  </div>
);

Switcher.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      element: PropTypes.node.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  withItemsEqualWidth: PropTypes.bool,
  withSeparator: PropTypes.bool,
  size: PropTypes.oneOf([BIG, SMALL]),
};
Switcher.defaultProps = {
  className: '',
  withItemsEqualWidth: false,
  withSeparator: false,
  size: SMALL,
};

export default Switcher;
