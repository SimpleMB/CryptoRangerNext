import Link from 'next/link';
import styles from './Card.module.scss';

interface FormField {
  fieldId: string;
  fieldName: string;
  label: string;
  value: string;
  type: string;
  rows?: number;
  required?: boolean;
}
interface Project {
  id: number;
  formFields: FormField[];
  ownerId: number;
}
interface Props {
  project: Project;
}

const Card: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`projects/${project.id}`}>
      <a className={styles.cardLink}>
        <li className={styles.cardWrapper}>
          <div className={styles.cardId}>{project.id}</div>
          <div>12-12-2020</div>
          <div className={styles.cardTitle}>{project.formFields[0].value}</div>
          <div className={styles.cardPublication}>
            {project.formFields[1].value}
          </div>
          <div className={styles.cardPayment}>
            <img src="/images/list-icon-paid.svg" alt="" />
          </div>
          <div className={styles.cardUpdated}>15-12-3030</div>
        </li>
      </a>
    </Link>
  );
};

export default Card;

// List of contents:
// 1. Project ID
// 2. Created
// 3. Projects name
// 4. Payment
// 5. Publication
// 6. Updated
