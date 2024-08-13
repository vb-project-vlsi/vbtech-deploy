import React from 'react';
import styles from './roundContainer.module.css';

const RoundContainer = ({ backgroundColor = '#fff', label = '', children }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className={styles.roundContainer} style={{ backgroundColor }}>
                {children}
            </div>
            {label && <div className={styles.label}>{label}</div>}
        </div>
    );
};

export default RoundContainer;
