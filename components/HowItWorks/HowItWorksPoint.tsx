import styles from './HowItWorksPoint.module.scss';

interface HowItWorksPointProps {
  id: number;
  title: string;
  description: string;
}

const HowItWorksPoint: React.FC<HowItWorksPointProps> = (props) => {
  return (
    <section className={styles.hiwPoint}>
      <h3 className={styles.hiwHeader}>
        {props.title} <span>{props.id}.</span>
      </h3>
      <p className={styles.hiwParagraph}>
        {props.description}
      </p>
    </section>
  );
};

export default HowItWorksPoint;
