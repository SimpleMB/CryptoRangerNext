import styles from './HowItWorks.module.scss';
import HowItWorksPoint from './HowItWorksPoint';

interface howItWorksPointData {
  id: number;
  title: string;
  description: string;
}

const howItWorksData: howItWorksPointData[] = [
  {
    id: 1,
    title: 'Sign up',
    description:
      'Choose if you want a free review or you’d like to support our channel. You will need to provide your name, email, project’s website and 4 digit pin code so you can login to your form later.',
  },
  {
    id: 2,
    title: 'Information',
    description:
      'Provide more information about your project. Choose what is most importand for your future customers to know about you. Help them understand why you, what’s your offer, product, service, why you’re better than others.',
  },
  {
    id: 3,
    title: 'Review',
    description:
      'Reviewer will analize the information you providedand add information from the project’s website. Then create a review ready for your approval.',
  },
];

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
