/* eslint-disable jsx-a11y/label-has-associated-control */
import { signIn } from 'next-auth/client';
import { MouseEvent } from 'react';
import styles from './Login.module.scss';

interface Props {
  csrfToken: string;
  setRegistation: (arr: boolean) => void;
}

const Login: React.FC<Props> = ({ csrfToken, setRegistation }) => {
  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    signIn('credentials', { email: 'a@gmail.com', pin: '1111' });
  };

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.leftSide}>
        <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />
        <h2>Sign In</h2>
      </div>
      <form className={styles.rightSide}>
        {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" />
        <label htmlFor="pin">Pin code:</label>
        <input name="pin" type="password" />
        <button type="submit" className={styles.signInBtn} onClick={onSubmit}>
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

// TODO incorporate react-hook-form in login component and signin function from nextAuth
