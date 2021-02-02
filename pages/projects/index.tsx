import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/client';
import Forbiden from '../../components/Forbiden/Forbiden';
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader';
import { formModel } from '../../models';
import { ApiRoutes, Project } from '../../types';
import dummyForm from '../../utils/dummies/dummyForm.json';
import styles from './Projects.module.scss';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

const createNewProject = async () => {
  await fetch(ApiRoutes.projects, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dummyForm),
  });
};

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  const [session, loading] = useSession();

  // TODO: if session is loading return Loader component (create one);
  if (loading) return null;
  if (!session && !loading) return <Forbiden />;
  return (
    <div className={styles.projectsWrapper}>
      <ProjectsHeader />
      <ProjectsList projects={projects} />
      <button
        className={styles.projectsBtn}
        type="button"
        onClick={createNewProject}
      >
        Create new project
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) return { props: {} };
  try {
    const projects = await formModel.findMany({
      where: {
        ownerId: session.id,
      },
      select: {
        id: true,
        formFields: {
          where: {
            OR: [
              { fieldId: { contains: 'projectName' } },
              { fieldId: { contains: 'whenPublished' } },
            ],
          },
        },
        createdAt: true,
        updatedAt: true,
        requested: true,
        paid: true,
        published: true,
        ownerId: true,
      },
    });

    // Date objects in createdAt and updatedAt causes serialization problem
    // with getServerSideProps in Next.js (it uses JSON to store props data)
    // Need to convert Date object to string for below 2 properties
    const projectsWithConvertedDates = projects.map((project) => {
      return {
        ...project,
        createdAt: project.createdAt.toString(),
        updatedAt: project.updatedAt.toString(),
      };
    });
    return {
      props: { projects: projectsWithConvertedDates },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { projects: [] }, // non serialized so if error above app throw except. on client side
    };
  }
};

export default Projects;
