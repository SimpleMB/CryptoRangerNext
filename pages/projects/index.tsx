import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

const Projects = () => {
  return <div>Enter</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const options = { headers: { cookie: context.req.headers.cookie } };
  const projects = await fetch('http://localhost:3000/api/projects', options);
  const hello = await projects.json();
  console.log('projects: ', hello);
  return {
    props: {},
  };
};

export default Projects;
