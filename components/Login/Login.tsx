/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './Login.module.scss';

interface Props {
  csrfToken: string;
  setRegistation: (arr: boolean) => void;
}

const Login: React.FC<Props> = ({ csrfToken, setRegistation }) => {
  return (
    <main className={styles.loginWrapper}>
      <div className={styles.leftSide}>
        <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />
        <h2>Sign In</h2>
      </div>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className={styles.rightSide}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" />
        <label htmlFor="pin">Pin code:</label>
        <input name="pin" type="password" />
        <button type="submit" className={styles.signInBtn}>
          Sign in
        </button>
        <button
          type="button"
          onClick={() => setRegistation(true)}
          className={styles.regBtn}
        >
          New user? Click here to sign up!
        </button>
      </form>
    </main>
  );
};

export default Login;
