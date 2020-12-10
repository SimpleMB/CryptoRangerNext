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
  return <Login csrfToken={csrfToken} setRegistation={setRegistration} />;
  // (
  //   <form method="post" action="/api/auth/callback/credentials">
  //     <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
  //     <input name="isRegistration" type="text" defaultValue="false" />
  //     <label htmlFor="email">
  //       Email
  //       <input name="email" type="text" />
  //     </label>
  //     <label htmlFor="password">
  //       Pin
  //       <input name="pin" type="text" />
  //     </label>
  //     <button type="submit">Sign in</button>
  //   </form>
  // );
};

SignIn.getInitialProps = async (context: NextPageContext) => {
  return {
    csrfToken: await csrfTokenFunc(context),
  };
};

export default SignIn;
