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
import styles from './planSummary.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PlanSummary = ({ className, name, children }) => (
  <div className={cx('planSummary', className)}>
    <div className={cx('name')}>{name}</div>
    {children}
  </div>
);
PlanSummary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.node,
};
PlanSummary.defaultProps = {
  className: '',
  children: null,
  name: null,
};

export default PlanSummary;
