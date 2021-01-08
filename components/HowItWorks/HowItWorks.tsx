import styles from './HowItWorks.module.scss';
import HowItWorksPoint from './HowItWorksPoint';
import dummyHowItWorksData from '../../utils/dummies/dummyHowItWorks.json';
import { HowItWorksPointData } from '../../types';

const howItWorksData: HowItWorksPointData[] = dummyHowItWorksData;

const HowItWorks: React.FC = () => {
  const howItWorksPointList = howItWorksData.map((point) => (
    <li key={point.id}>
      <HowItWorksPoint
        id={point.id}
        title={point.title}
        description={point.description}
      />
    </li>
  ));
  return (
    <section className={styles.hiw} id="howitworks">
      <h3 className={styles.hiwHeader}>How it works</h3>
      <ul className={styles.hiwList}>{howItWorksPointList}</ul>
    </section>
  );
};

export default HowItWorks;
