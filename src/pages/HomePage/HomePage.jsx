import React from 'react';
import styles from './homePage.module.css';
import BackgroundVideo from '../../assets/videoplayback.webm'; // Path to your video file

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <video className={styles.backgroundVideo} autoPlay muted loop>
        <source src={BackgroundVideo} type="video/webm" /> {/* Corrected type */}
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.fadeText}>VIBHUAYA TECHNOLOGIES</h1>
        <h5 className={styles.fadeText}>Creating Cutting-Edge Design Solutions to Drive Innovation</h5>
      </div>
    </div>
  );
};

export default HomePage;
