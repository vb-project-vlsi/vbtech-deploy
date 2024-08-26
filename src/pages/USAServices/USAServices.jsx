import React, { useEffect, useRef } from 'react';
import styles from './USAServices.module.css';
import RTLImage from '../../assets/RTLImage.jpg';
import DesignVerification from '../../assets/DesignVerification.jpg';
import DFTImage from '../../assets/Testability.jpg';
import PhysicalDesignImage from '../../assets/physicalDesign.jpg';
import PostSilicon from '../../assets/postSilicon.jpg';
import Button from '../../components/Button/Button';

const services = [
    { 
        title: 'RTL DESIGNING', 
        content: 'RTL (Register Transfer Level) Design is a crucial phase in the VLSI design process, where the behavior of a digital circuit is described using registers, logic gates, and datapaths at a high abstraction level. It serves as the bridge between architectural design specifications and the implementation of the hardware.',
        image: RTLImage
    },
    { 
        title: 'DESIGN VERIFICATION', 
        content: 'In VLSI design, errors can have profound consequences, ranging from functional failures to costly rework during manufacturing. Design Verification aims to identify and resolve potential issues early in the design cycle, minimizing risks and optimizing time-to-market. By validating the design against specifications and requirements, verification engineers ensure that the chip behaves as expected under different operating conditions and use cases.',
        image: DesignVerification
    },
    { 
        title: 'DFT (DESIGN FOR TESTABILITY)', 
        content: 'In modern VLSI design, where chips contain billions of transistors and complex interconnections, DFT is essential for identifying manufacturing defects, ensuring functional correctness, and meeting quality standards. By embedding testability features into the design, DFT enables cost-effective testing and enhances the yield of semiconductor manufacturing processes.',
        image: DFTImage
    },
    { 
        title: 'PHYSICAL DESIGN', 
        content: 'Physical Design in VLSI (Very Large Scale Integration) is a crucial stage in the semiconductor manufacturing process, where the logical circuit representation of a chip is transformed into a physical layout that can be fabricated. It involves a meticulous balance of creativity, engineering principles, and cutting-edge technology to achieve optimal performance, manufacturability, and reliability.',
        image: PhysicalDesignImage
    },
    { 
        title: 'POST SILICON', 
        content: 'Post-Silicon Validation is a critical phase in the lifecycle of VLSI chips, where the fabricated silicon is tested rigorously to ensure functionality, performance, and reliability before mass production and deployment. It involves comprehensive testing, debugging, and validation of the physical chip to identify and resolve issues that may arise due to manufacturing variations, design flaws, or operational conditions.',
        image: PostSilicon
    }
];

const USAServices = () => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the container
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        entry.target.dataset.animation === 'left'
                            ? styles.slideInFromLeft
                            : styles.slideInFromRight
                    );
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <h1 className={styles.heading}>US Based Services</h1>
            {services.map((service, index) => (
                <div
                    key={index}
                    className={index % 2 === 0 ? styles.serviceEven : styles.serviceOdd}
                >
                    <div className={styles.imageContainer}>
                        <img
                            src={service.image}
                            alt={service.title}
                            className={styles.image}
                        />
                    </div>
                    <div
                        className={styles.text}
                        ref={el => (elementsRef.current[index] = el)}
                        data-animation={index % 2 === 0 ? 'left' : 'right'}
                    >
                        <h2>{service.title}</h2>
                        <p>{service.content}</p>
                    </div>
                </div>
            ))}
            <Button label="Back" onClick={() => window.history.back()}></Button>
        </div>
    );
};

export default USAServices;
