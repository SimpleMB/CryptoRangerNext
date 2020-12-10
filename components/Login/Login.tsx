interface Props {
  csrfToken: string;
  setRegistation: (arr: boolean) => void;
}

const Login: React.FC<Props> = ({ csrfToken, setRegistation }) => {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <h2>Hello mate. Please sign in :)</h2>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label htmlFor="email">
        Email
        <input name="email" type="text" />
      </label>
      <label htmlFor="password">
        Pin
        <input name="pin" type="text" />
      </label>
      <button type="submit">Sign in</button>
      <button type="button" onClick={() => setRegistation(true)}>
        Do you want to register? Click here
      </button>
    </form>
  );
};

export default Login;
