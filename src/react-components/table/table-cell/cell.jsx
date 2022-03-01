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
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './cell.scss';

const Cell = ({ children, className }) => (
  <div className={classnames('cell', className)}>
    {children}
  </div>
);

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Cell.defaultProps = {
  className: '',
  children: null,
};

export default Cell;
