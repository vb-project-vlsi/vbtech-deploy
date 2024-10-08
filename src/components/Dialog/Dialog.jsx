import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './dialog.module.css';

const Dialog = ({ width, height, onClose, mainContent, sideContent }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.dialog} style={{ width, height }}>
                <button className={styles.closeButton} onClick={onClose}>
                    <FaTimes />
                </button>
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        {mainContent}
                    </div>
                    {sideContent && (
                        <>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.sideContent}>
                                {sideContent}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
