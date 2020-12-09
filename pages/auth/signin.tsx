import { NextPage, NextPageContext } from 'next';
import { csrfToken as csrfTokenFunc } from 'next-auth/client';

interface Props {
  csrfToken: string;
}

const SignIn: NextPage<Props> = ({ csrfToken }) => {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input name="isRegistration" type="text" defaultValue="false" />
      <label htmlFor="email">
        Email
        <input name="email" type="text" />
      </label>
      <label htmlFor="password">
        Pin
        <input name="pin" type="text" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};

SignIn.getInitialProps = async (context: NextPageContext) => {
  return {
    csrfToken: await csrfTokenFunc(context),
  };
};

export default SignIn;
