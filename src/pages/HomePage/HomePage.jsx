import React from 'react';
import styles from './homePage.module.css';
import BackgroundGif from '../../assets/videoplaybackfinal.gif'; // Path to your GIF file

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <img className={styles.backgroundGif} src={BackgroundGif} alt="Background" /> {/* Updated to use GIF */}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.fadeText}>VIBHUAYA TECHNOLOGIES</h1>
        <h5 className={styles.fadeText}>Creating Cutting-Edge Design Solutions to Drive Innovation</h5>
      </div>
    </div>
  );
};

export default HomePage;
