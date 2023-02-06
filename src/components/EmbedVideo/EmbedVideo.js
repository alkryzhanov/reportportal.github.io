import React from 'react';
import * as styles from './EmbedVideo.module.scss';

// eslint-disable-next-line react/prop-types
export const EmbedVideo = ({ embedId, onClick }) => (
  <div className={styles.videoResponsive} onClick={onClick}>
    <iframe
      height="544px"
      width="960px"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded video"
    />
  </div>
);
