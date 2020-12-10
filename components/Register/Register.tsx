interface Props {
  csrfToken: string;
  setRegistation: (arr: boolean) => void;
}

const Register: React.FC<Props> = ({ csrfToken, setRegistation }) => {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <h2>Welcome friend. Please sign up :)</h2>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label htmlFor="email">
        Email
        <input name="email" type="text" />
      </label>
      <label htmlFor="password">
        PIN
        <input name="pin" type="password" />
      </label>
      <label htmlFor="password">
        Confirm PIN
        <input name="pinConfirmation" type="password" />
      </label>
      <button type="submit">Sign Up</button>
      <button type="button" onClick={() => setRegistation(false)}>
        Already a member? Click to Sign In
      </button>
    </form>
  );
};

export default Register;
