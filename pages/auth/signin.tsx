import { NextPage, NextPageContext } from 'next';
import { csrfToken as csrfTokenFunc } from 'next-auth/client';
import { useState } from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

interface Props {
  csrfToken: string;
}

const SignIn: NextPage<Props> = ({ csrfToken }) => {
  const [isRegistration, setRegistration] = useState(false);
  if (isRegistration)
    return <Register csrfToken={csrfToken} setRegistation={setRegistration} />;
  return <Login setRegistation={setRegistration} />;
};

SignIn.getInitialProps = async (context: NextPageContext) => {
  return {
    csrfToken: await csrfTokenFunc(context),
  };
};

export default SignIn;
