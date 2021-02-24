import styles from './DeleteModal.module.scss';

interface Props {
  showModal: (show: boolean) => void;
  deleteProject: () => void;
}

const DeleteModal: React.FC<Props> = ({ showModal, deleteProject }) => {
  const hideModal = () => {
    showModal(false);
  };

  return (
    <div className={styles.modalWrapper}>
      <h3>Are you sure you want to delete this project?</h3>
      <div className={styles.modalControls}>
        <button
          className={styles.modalBtnDelete}
          type="button"
          onClick={deleteProject}
        >
          Yes, delete
        </button>
        <button
          className={styles.modalBtnCancel}
          type="button"
          onClick={hideModal}
        >
          No, go back
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
