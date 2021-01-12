import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/client';
import Card from '../../components/Card/Card';
import Forbiden from '../../components/Forbiden/Forbiden';
import ListHeader from '../../components/ListHeader/ListHeader';
import { formModel } from '../../models';
import { Project } from '../../types';
import dummyForm from '../../utils/dummies/dummyForm.json';
import styles from './Projects.module.scss';

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  const [session, loading] = useSession();

  console.log('Projects', projects);

  const sendNewForm = async () => {
    await fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dummyForm),
    });
  };

  const projectsList = projects
    ? projects.map((project) => <Card key={project.id} project={project} />)
    : [];

  // TODO: if session is loading return Loader component (create one);
  if (loading) return <Forbiden />;
  if (!session && !loading) return <Forbiden />;
  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.projectsHeader}>
        <img
          src="/images/cryptorangerlogo.svg"
          alt="Crypto Ranger logo"
          className={styles.projectsLogo}
        />
        <h1 className={styles.projectsHeaderName}>Projects</h1>
      </div>
      <ListHeader />
      <ul>{projectsList}</ul>
      <button
        className={styles.projectsBtn}
        type="button"
        onClick={sendNewForm}
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

    // Date objects in createdAt and updatedAt causes serialization
    // problem with getServerSideProps in Next.js (it uses JSON)
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
      props: {}, // non serialized so if error above app throw except. on client side
    };
  }
};

export default Projects;
