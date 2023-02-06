import React, { useState } from 'react';

import * as styles from './Showcase.module.scss';
import { EmbedVideo } from '../EmbedVideo';

export const Showcase = () => {
  const VIDEO_ID = 'Xci19TAiO50';
  const query = '&autoplay=1&mute=1&controls=0&start=15&end=45&loop=1&rel=0';
  const src = `https://www.youtube.com/embed/${VIDEO_ID}?playlist=${VIDEO_ID}${query}`;

  const [isEmbedVideoShow, setIsEmbedVideoShow] = useState(false);
  const handleClick = () => {
    setIsEmbedVideoShow((prevState) => !prevState);
  };
  const watchVideoBtn = (
    <a href="#" className={styles.btnWatchVideo} onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24 44a20 20 0 1 0 0-40 20 20 0 0 0 0 40Z"
        />
        <path
          fill="#fff"
          d="M20 19.74a2 2 0 0 1 3.1-1.67l6.4 4.27a2 2 0 0 1 0 3.32l-6.4 4.27a2 2 0 0 1-3.1-1.67v-8.52Z"
        />
      </svg>
      <span>Watch video</span>
    </a>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.bgVideoContainer}>
        <iframe className={styles.bgVideo} src={src} title="Embedded video" />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          AI-powered <br />
          Test Automation Dashboard
        </h1>
        <p className={styles.subtitle}>
          Acquire, aggregate and analyze test reports to ascertain release health.
        </p>
        <div className={styles.btnRow}>
          <div className={styles.btnGroup}>
            <button className={styles.btn}>Start free trial</button>
            <button className={`${styles.btn} ${styles.btnOutline}`}>Get a quote</button>
          </div>
        </div>
        <div className={styles.watchVideoContainer}>{watchVideoBtn}</div>
      </div>
      {isEmbedVideoShow && <EmbedVideo embedId={VIDEO_ID} onClick={handleClick} />}
    </div>
  );
};
