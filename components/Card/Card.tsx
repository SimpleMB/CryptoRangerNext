import Link from 'next/link';
import { Project } from '../../types';
import styles from './Card.module.scss';

interface Props {
  project: Project;
}

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
          <div className={styles.cardCreated}>{created}</div>
          <div className={styles.cardTitle}>{formFields[0].value}</div>
          <div className={styles.cardPublication}>{published ? '✔' : '❌'}</div>
          <div className={styles.cardRequested}>{requested ? '✔' : '❌'}</div>
          <div className={styles.cardPaymentStatus}>{payment}</div>
          <div className={styles.cardUpdated}>{updated}</div>
        </li>
      </a>
    </Link>
  );
};

export default Card;
