import React from 'react';
import { csrfToken as csrfTokenFunc } from 'next-auth/client';

export default function SignIn({ csrfToken }) {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input name="isRegistration" type="text" defaultValue="false" />
      <label htmlFor="email">
        Email
        <input name="email" type="text" />
      </label>
      <label htmlFor="password">
        Password
        <input name="password" type="text" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfTokenFunc(context),
  };
};
