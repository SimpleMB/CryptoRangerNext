import { Project } from '../../types';
import Card from '../Card/Card';
import ListHeader from '../ProjectsListHeader/ProjectsListHeader';

const ProjectsList = ({ projects }) => {
  const projectsList = projects.map((project: Project) => (
    <Card key={project.id} project={project} />
  ));
  return (
    <>
      <ListHeader />
      <ul>{projectsList}</ul>
    </>
  );
};

export default ProjectsList;
