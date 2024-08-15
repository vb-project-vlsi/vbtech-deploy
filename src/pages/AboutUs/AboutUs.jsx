<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import styles from './about.module.css';

const AboutUs = () => {
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    paragraphRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      paragraphRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const setRef = (index) => (el) => {
    paragraphRefs.current[index] = el;
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.aboutUs} ${styles.content}`}>
        <h2 className={styles.heading}>About Us</h2>
        <p ref={setRef(0)} className={`${styles.paragraph} ${styles.hidden}`}>
          Vibhuaya Technologies (VT) was born in 2022 in Hyderabad. VT is a design/services company dedicated to delivering exceptional results in a timely manner while ensuring constant communication with clients throughout the project. With a team of skilled designers, VT guarantees high-quality outcomes and comprehensive support, offering turnkey solutions from RTL design to GDS, emphasizing optimal PPA metrics. Specializing in RTL Design, DFT, Verification, Analog Design, and Layout, VT also focuses on research collaborations with universities on neuromorphic designs.
        </p>
        <p ref={setRef(1)} className={`${styles.paragraph} ${styles.hidden} ${styles.delay}`}>
          Our extensive experience includes successfully delivering error-free silicon in more than 5 tapeouts, covering a diverse range of technologies from 14nm to 3nm designs. Our expertise in advanced process nodes is centered on high-performance networking and computing applications, as well as high-performance, low-power ASIC designs. Our primary focus is on enhancing power, performance, and area targets to provide optimal solutions for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
=======
import React, { useEffect, useRef } from 'react';
import styles from './about.module.css';

const AboutUs = () => {
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    paragraphRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      paragraphRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const setRef = (index) => (el) => {
    paragraphRefs.current[index] = el;
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.aboutUs} ${styles.content}`}>
        <h2 className={styles.heading}>Who We Are</h2>
        <blockquote>
          <p ref={setRef(0)} className={`${styles.paragraph} ${styles.hidden}`}>
            Vibhuaya Technologies(VT)  born in 2022. VT is an Engineering  Design Services company dedicated to deliver exceptional results in a timely manner while ensuring constant communication with clients throughout the project. With a team of skilled designers, VT guarantees high-quality outcomes and comprehensive support, offering turnkey solutions from RTL design to GDS, emphasizing optimal PPA metrics. Specializing in RTL Design, DFT, Verification, Analog Design, and Layout, VT also focuses on research collaborations with universities on neuromorphic designs.
          </p>
          <p ref={setRef(1)} className={`${styles.paragraph} ${styles.hidden} ${styles.delay}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our extensive experience includes successfully delivering error-free silicon in more than 5 tape outs, covering a diverse range of technologies from 14nm to 3nm designs. Our expertise in advanced process nodes is centred on high-performance networking and computing applications, as well as high-performance, low-power ASIC designs. Our primary focus is on enhancing power, performance, and area targets to provide optimal solutions for our clients.
            &nbsp;
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutUs;
>>>>>>> 79c38e14c949436889d06f9ad9e81f95fe38252f
