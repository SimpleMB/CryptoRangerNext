import styles from './HowItWorks.module.scss';
import HowItWorksPoint from './HowItWorksPoint';

const HowItWorks = () => {
  return (
    <section className={styles.clients} id="howitworks">
      <h3 className={styles.clientsHeader}>How it works</h3>
      <ul className={styles.clientsList}>
        <li>
          <HowItWorksPoint id={1} title="Sign up" description="hello this is description. How are you?"/>
        </li>
        <li>
        <HowItWorksPoint id={2} title="Sign up" description="hello this is description. How are you?"/>
        </li>
        <li className={styles.clientsCherrio}>
        <HowItWorksPoint id={3} title="Sign up" description="hello this is description. How are you?"/>
        </li>
      </ul>
    </section>
  );
};

export default HowItWorks;