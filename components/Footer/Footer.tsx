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
            <li>Testimonials</li>
            <li>Services</li>
            <li>Attributions</li>
          </ul>
          <ul className={styles.footerLinks}>
            <h3>Channel Links</h3>
            <li>Latest reviews</li>
            <li>Popular reviews</li>
            <li>ICO's</li>
            <li>Tutorials</li>
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
