<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import styles from './navigation.module.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const navigateToUSAServices = () => {
    navigate('/usa-services');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>VIBHUAYA LOGO</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="home" smooth={true} duration={500} className={styles.navLink}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className={styles.navLink}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="team" smooth={true} duration={500} className={styles.navLink}>
            OUR TEAM
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} className={styles.navLink}>
            SERVICES
          </Link>
        </li>
        <li
          className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.navLink}>
            INTERNATIONAL COLLABORATIONS <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
          </div>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem} onClick={navigateToUSAServices}>
                <div className={styles.navLink}>
                  <Flag code="USA" className={styles.flagIcon} /> USA
                </div>
              </li>
              <li className={styles.dropdownItem}>
                <Link to="malaysia" smooth={true} duration={500} className={styles.navLink}>
                  <Flag code="MYS" className={styles.flagIcon} /> Malaysia
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className={styles.navLink}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
=======
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // useNavigate hook
import styles from './navigation.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  const navigateToUSAServices = () => {
    navigate('/usa-services');
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>VIBHUAYA LOGO</div>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.menuIcon}
        onClick={toggleMobileMenu}
      />
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} className={styles.navLink} onClick={toggleMobileMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className={styles.navLink} onClick={toggleMobileMenu}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} className={styles.navLink} onClick={toggleMobileMenu}>
            SERVICES
          </Link>
        </li>
        <li>
  <div 
    className={styles.navLink} 
    onClick={navigateToUSAServices}
  >
    <Flag code="USA" className={styles.flagIcon} /> USA SERVICES
  </div>
</li>
        <li>
          <Link to="contact" smooth={true} duration={500} className={styles.navLink} onClick={toggleMobileMenu}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
>>>>>>> 79c38e14c949436889d06f9ad9e81f95fe38252f
