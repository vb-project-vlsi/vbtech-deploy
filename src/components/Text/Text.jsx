// Text.jsx
import React from 'react';
import styles from './text.module.css';

const Text = ({ label, icon, textColor, iconHeight, iconWidth, textSize, content }) => {
    return (
        <div className={styles.textContainer}>
            <img src={icon} alt={label} style={{ height: iconHeight, width: iconWidth }} />
            <h3 style={{ color: textColor, fontSize: textSize }}>{label}</h3>
            <p className={styles.content}>{content}</p>
        </div>
    );
};

export default Text;
