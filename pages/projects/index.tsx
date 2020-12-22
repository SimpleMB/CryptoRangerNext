import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/client';
import Forbiden from '../../components/Forbiden/Forbiden';

const dummyForm = {
  id: 2,
  formFields: [
    {
      fieldId: 'projectName',
      fieldName: 'projectName',
      label: "Project's name:",
      value: '',
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
      value: '2021-12-03',
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
      value: '2020-12-07',
      type: 'date',
      required: true,
    },
  ],
};
interface Props {
  projects: Array<unknown>;
}

const Projects: NextPage<Props> = ({ projects }) => {
  const [session, loading] = useSession();
  console.log(projects);

  const sendNewForm = async () => {
    console.log('sending new form...');
    const response = await fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dummyForm),
    });
    console.log(response);
  };

  if (!session && !loading) return <Forbiden />;
  return (
    <div>
      <button type="button" onClick={sendNewForm}>
        Create new project
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const options = { headers: { cookie: context.req.headers.cookie } };
  const response = await fetch('http://localhost:3000/api/projects', options);
  const projects = await response.json();
  console.log('projects: ', projects);
  return {
    props: { projects },
  };
};

export default Projects;
