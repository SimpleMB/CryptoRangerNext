import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <img
          src="/images/cryptorangerlogoWhite.svg"
          alt="Crypto Ranger logo sign"
        />
        <div className={styles.footerLinksWrapper}>
          <ul className={styles.footerLinks}>
            <h3>Information</h3>
            <li>About Us</li>
            <li>More Search</li>
            <li>Testimonials</li>
            <li>Services</li>
          </ul>
          <ul className={styles.footerLinks}>
            <h3>Helpful Links</h3>
            <li>Services</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className={styles.footerLinks}>
            <h3>Follow</h3>
            <li>Youtube</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
          <ul className={styles.footerLinks}>
            <h3>Legal</h3>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
