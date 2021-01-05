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
          <span className={styles.cardId}>{project.id}</span>
          <span>12-12-2020</span>
          <span className={styles.cardTitle}>
            {project.formFields[0].value}
          </span>
          <span className={styles.cardPayment}>
            Payment:{' '}
            <span role="img" aria-label="dolar sign emoji">
              💲⏱
            </span>
          </span>
          <span className={styles.cardPublication}>
            Publication: {project.formFields[1].value}
          </span>
          <span className={styles.cardUpdated}>up: 15-12-3030</span>
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
