import { Project } from '../../types';
import Card from '../Card/Card';
import ListHeader from '../ProjectsListHeader/ProjectsListHeader';
import styles from './ProjectsList.module.scss';

interface Props {
  projects: Project[];
}

const ProjectsList: React.FC<Props> = ({ projects }) => {
  const projectsList = projects.map((project: Project) => (
    <Card key={project.id} project={project} />
  ));
  return (
    <>
      <ListHeader />
      {projects.length > 0 ? (
        <ul>{projectsList}</ul>
      ) : (
        <p className={styles.projectListNothing}>
          Nothing to show here... Create new project.
        </p>
      )}
    </>
  );
};

export default ProjectsList;
