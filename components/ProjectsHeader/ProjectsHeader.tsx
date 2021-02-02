import styles from './ProjectsHeader.module.scss';

const ProjectsHeader = () => {
  return (
    <div className={styles.projectsHeader}>
      <img
        src="/images/cryptorangerlogo.svg"
        alt="Crypto Ranger logo"
        className={styles.projectsLogo}
      />
      <h1 className={styles.projectsHeaderName}>Projects</h1>
    </div>
  );
};

export default ProjectsHeader;
