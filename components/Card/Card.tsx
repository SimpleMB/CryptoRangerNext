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
  console.log(project);
  return (
    <Link href={`projects/${project.id}`}>
      <a className={styles.cardLink}>
        <li className={styles.cardWrapper}>
          <span className={styles.cardTitle}>
            {project.formFields[0].value}
          </span>
          <span className={styles.cardPublication}>
            Publication: {project.formFields[1].value}
          </span>
        </li>
      </a>
    </Link>
  );
};

export default Card;
