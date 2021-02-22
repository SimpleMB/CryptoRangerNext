import styles from './ProjectsListHeader.module.scss';

const ListHeader: React.FC = () => {
  return (
    <div className={styles.listHeaderWrapper}>
      <div className={styles.headerId}>Id</div>
      <div className={styles.headerCreated}>Created</div>
      <div className={styles.headerTitle}>Project Title</div>
      <div className={styles.headerPublication}>Published</div>
      <div className={styles.headerRequested}>Requested</div>
      <div className={styles.headerPaymentStatus}>Payment</div>
      <div className={styles.headerUpdated}>Updated</div>
    </div>
  );
};

export default ListHeader;
