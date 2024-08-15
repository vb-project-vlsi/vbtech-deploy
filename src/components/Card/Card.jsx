<<<<<<< HEAD
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
=======
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
>>>>>>> 79c38e14c949436889d06f9ad9e81f95fe38252f
