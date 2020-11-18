import styles from './About.module.scss';
import AboutStats from './AboutStats';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTopHeader}>
        Crypto Ranger is a <span>YouTube</span> marketing channel for your
        crypto projects
      </h2>
      <p className={styles.aboutParagraph}>
        We create video content about blockchain products, ICOs and events. We
        make tutorials and spread good word about promising initiatives.
      </p>
      <h3 className={styles.aboutBottomHeader}>
        Stay connected to the community
      </h3>
      <AboutStats views={150} subs={18} projects={25}/>
    </section>
  );
};

export default About;
