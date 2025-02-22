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

import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalContext from '../modalContext';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './modal.scss';

const cx = classNames.bind(styles);

const Modal = ({ children, className, backTo, withoutMobileCloseButton }) => {
  const { closeModal } = useContext(ModalContext);
  const modalWrapperRef = useRef();

  const handleClickOutside = (event) => {
    if (modalWrapperRef.current.className === event.target.className) {
      closeModal();
    }
  };

  return (
    <div className={cx('background')} onClick={handleClickOutside}>
      <Scrollbars autoHide hideTracksWhenNotNeeded >
        <div className={cx('modal-wrapper')} ref={modalWrapperRef}>
          <div className={cx('modal', className)}>
            {backTo
              ? <div className={cx('back')} onClick={closeModal}>
                <i className={cx('arrow')}/>
                {backTo}
              </div>
              : null
            }
            <i
              className={cx('close-button', { hidden: withoutMobileCloseButton })}
              onClick={closeModal}
            />
            {children}
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  backTo: PropTypes.node,
  withoutMobileCloseButton: PropTypes.bool,
};
Modal.defaultProps = {
  className: '',
  backTo: null,
  withoutMobileCloseButton: false,
};

export default Modal;
