import Link from 'next/link';
import { Project } from '../../types';
import styles from './Card.module.scss';

interface Props {
  project: Project;
}

// export interface Project {
//   id: number;
//   formFields: Input[];
//   createdAt: Date | string;
//   updatedAt: Date | string;
//   published: boolean;
//   paid: boolean;
//   requested: boolean;
//   ownerId: number;
// }

const Card: React.FC<Props> = ({ project }) => {
  const {
    id,
    createdAt,
    updatedAt,
    published,
    paid,
    requested,
    formFields,
  } = project;
  const created = new Date(createdAt).toLocaleDateString();
  const updated = new Date(updatedAt).toLocaleDateString();
  // const publication = new Date(formFields[1].value).toLocaleDateString();
  const payment = paid ? (
    <img src="/images/list-icon-paid.svg" alt="" />
  ) : (
    <img src="/images/list-icon-free.svg" alt="" />
  );

  return (
    <Link href={`projects/${project.id}`}>
      <a className={styles.cardLink}>
        <li className={styles.cardWrapper}>
          <div className={styles.cardId}>{id}</div>
          <div>{created}</div>
          <div className={styles.cardTitle}>{formFields[0].value}</div>
          <div className={styles.cardPublication}>{published ? '✔' : '❌'}</div>
          <div className={styles.cardPublication}>{requested ? '✔' : '❌'}</div>
          <div className={styles.cardPayment}>{payment}</div>
          <div className={styles.cardUpdated}>{updated}</div>
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
