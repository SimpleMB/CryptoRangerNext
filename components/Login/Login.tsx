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
      </div>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className={styles.rightSide}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label htmlFor="loginEmail">Email address:</label>
        <input name="loginEmail" type="email" />
        <label htmlFor="passwordEmail">Pin code:</label>
        <input name="passwordEmail" type="password" />
        <button type="submit" className={styles.signInBtn}>
          Sign in
        </button>
        <button
          type="button"
          onClick={() => setRegistation(true)}
          className={styles.regBtn}
        >
          Do you want to register? Click here!
        </button>
      </form>
    </main>
  );
};

export default Login;
