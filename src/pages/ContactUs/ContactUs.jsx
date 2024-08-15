import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import RoundContainer from '../../components/RoundContainer/RoundContainer';
import styles from './contact.module.css';
import image from '../../assets/contact.png';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <img src={image} alt="Contact Us" className={styles.image} />
            </div>
            <div className={styles.contactSection}>
                <h1 className={styles.heading}>GET IN TOUCH WITH US!</h1>
                <div className={styles.contactInfo}>
                    <div className={styles.infoItem}>
                        <RoundContainer backgroundColor="#f0f0f0">
                            <FaPhone className={styles.icon} />
                        </RoundContainer>
                        <span className={styles.text}>8121003530</span>
                    </div>
                    <div className={styles.infoItem}>
                        <RoundContainer backgroundColor="#f0f0f0">
                            <FaEnvelope className={styles.icon} />
                        </RoundContainer>
                        <span className={styles.text}>info@vibhuayatechnologies.com</span>
                    </div>
                    <div className={styles.infoItem}>
                        <RoundContainer backgroundColor="#f0f0f0">
                            <FaMapMarkerAlt className={styles.icon} />
                        </RoundContainer>
                        <span className={styles.text}><strong>US OFFICE :</strong> 3524 SILVERSIDE RD STE 35B WILMINGTON, DE 19810-4929-520.</span>
                    </div>
                    <div className={styles.infoItem}>
                        <RoundContainer backgroundColor="#f0f0f0">
                            <FaMapMarkerAlt className={styles.icon} />
                        </RoundContainer>
                        <span className={styles.text}><strong>HYDERABAD OFFICE :</strong> T-Hub Foundation ,Plot No 1/C, Sy No.83/1,Hyderabad Knowledge City, Raidurgam, Telangana ,Hyderabad, 500081.</span>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <RoundContainer backgroundColor="#f0f0f0" label="Instagram">
                            <FaInstagram className={styles.instagram} />
                        </RoundContainer>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <RoundContainer backgroundColor="#f0f0f0" label="Facebook">
                            <FaFacebook className={styles.facebook} />
                        </RoundContainer>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <RoundContainer backgroundColor="#f0f0f0" label="Twitter">
                            <FaTwitter className={styles.twitter} />
                        </RoundContainer>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <RoundContainer backgroundColor="#f0f0f0" label="LinkedIn">
                            <FaLinkedin className={styles.linkedin} />
                        </RoundContainer>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
