import styles from './HowItWorksPoint.module.scss';

interface HowItWorksPointProps {
  id: number;
  title: string;
  description: string;
}

const HowItWorksPoint: React.FC<HowItWorksPointProps> = (props) => {
  const { id, title, description } = props;
  return (
    <div className={styles.hiwPoint}>
      <h3 className={styles.hiwHeader}>
        {title} <span>{id}.</span>
      </h3>
      <p className={styles.hiwParagraph}>{description}</p>
    </div>
  );
};

export default HowItWorksPoint;
