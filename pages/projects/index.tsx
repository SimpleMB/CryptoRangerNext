import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/client';
import Card from '../../components/Card/Card';
import Forbiden from '../../components/Forbiden/Forbiden';
import ListHeader from '../../components/ListHeader/ListHeader';
import { formModel } from '../../models';
import { Project } from '../../types';
import styles from './Projects.module.scss';

const dummyForm = {
  formFields: [
    {
      fieldId: 'projectName',
      fieldName: 'projectName',
      label: "Project's name:",
      value: 'New project...',
      type: 'small',
      required: true,
    },
    {
      fieldId: 'projectWeb',
      fieldName: 'projectWeb',
      label: "Project's website:",
      value: '',
      type: 'small',
      required: true,
    },
    {
      fieldId: 'projectStart',
      fieldName: 'projectStart',
      label: 'When project starts:',
      value: '',
      type: 'date',
      required: true,
    },
    {
      fieldId: 'coreConcept',
      fieldName: 'coreConcept',
      label: 'Core concept of the project:',
      value: '',
      type: 'big',
      rows: 10,
      required: false,
    },
    {
      fieldId: 'simpleAbout',
      fieldName: 'simpleAbout',
      label: 'What is your project about? Explain it as simply as you can:',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'useExample',
      fieldName: 'useExample',
      label: 'Provide simple example of use:',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'products',
      fieldName: 'products',
      label: 'Main products:',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'benefits',
      fieldName: 'benefits',
      label: 'What are the benefits of using your products:',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'projectIdea',
      fieldName: 'projectIdea',
      label: 'How did you came up with idea to start such project?',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'importandToKnow',
      fieldName: 'importandToKnow',
      label:
        'What are the most importand things in your project that your future customer NEED to know?',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'closestCompetitor',
      fieldName: 'closestCompetitor',
      label: 'Who is your closest competitor?',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'diffCompetitor',
      fieldName: 'diffCompetitor',
      label:
        "What's the difference between your project and closest competitor?",
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'advantageCompetitor',
      fieldName: 'advantageCompetitor',
      label: 'Advantages over competition:',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'futurePromotions',
      fieldName: 'futurePromotions',
      label: 'Future promotions / sales / air drops?',
      value: '',
      type: 'big',
      rows: 4,
      required: false,
    },
    {
      fieldId: 'manyPeople',
      fieldName: 'manyPeople',
      label: 'How many people work on this project?',
      value: '',
      type: 'small',
      required: false,
    },
    {
      fieldId: 'aboutOwner',
      fieldName: 'aboutOwner',
      label: 'About owner of the project?',
      value: '',
      type: 'big',
      rows: 5,
      required: false,
    },
    {
      fieldId: 'linksDesc',
      fieldName: 'linksDesc',
      label: 'Importand links to place in the video description:',
      value: '',
      type: 'links',
      required: false,
    },
    {
      fieldId: 'whenPublished',
      fieldName: 'whenPublished',
      label: 'When review must be published?',
      value: '03-03-2077',
      type: 'date',
      required: true,
    },
  ],
};

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  const [session, loading] = useSession();

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
        ownerId: true,
      },
    });
    return {
      props: { projects },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {}, // non serialized so if error above app throw except. on client side
    };
  }
};

export default Projects;
