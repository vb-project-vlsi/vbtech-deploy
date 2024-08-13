import React, { useState, useEffect } from 'react';
import styles from './ourTeam.module.css';
import Card from '../../components/Card/Card'; // Assuming Card is already implemented
import profile1 from '../../assets/profile1.jpeg';
import profile2 from '../../assets/profile2.jpeg';
import profile3 from '../../assets/profile3.jpeg';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Software Engineer',
        image: profile1,
        description: 'John is a skilled software engineer with 5 years of experience. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Jane Smith',
        role: 'Product Manager',
        image: profile2,
        description: 'Jane is an experienced product manager who loves building great products. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Emily Johnson',
        role: 'UX Designer',
        image: profile3,
        description: 'Emily is a talented UX designer with a passion for user-centered design. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    // Add more team members as needed
];

const OurTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // Function to start auto sliding
        const startAutoSlide = () => {
            const id = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
            }, 3000); // Change slide every 3 seconds

            setIntervalId(id); // Save the interval ID
        };

        startAutoSlide();

        // Cleanup function to clear the interval on unmount
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures effect runs only on mount and unmount

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        if (intervalId) {
            clearInterval(intervalId); // Stop automatic sliding
            setIntervalId(null); // Reset intervalId to indicate no active interval
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Meet our Team!</h2>
            <div className={styles.cardContainer}>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`${styles.cardWrapper} ${index === currentIndex ? styles.active : ''}`}
                    >
                        <Card height="400px" width="800px" backgroundColor="#f5f5f5">
                            <div className={styles.cardContent}>
                                <img src={member.image} alt={`${member.name}`} className={styles.image} />
                                <div className={styles.content}>
                                    <h3>{member.name}</h3>
                                    <p className={styles.role}>{member.role}</p>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
            <div className={styles.dots}>
                {teamMembers.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
