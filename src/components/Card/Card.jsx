import React from 'react';
import styles from './card.module.css';

const Card = ({ height, width, backgroundColor, children }) => {
    return (
        <div 
            className={styles.card} 
            style={{ height, width, backgroundColor }}>
            {children}
        </div>
    );
};

export default Card;
