/* eslint-disable jsx-a11y/label-has-associated-control */
import { signIn } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { MouseEvent } from 'react';
import styles from './Login.module.scss';

interface Props {
  setRegistation: (arr: boolean) => void;
}

const Login: React.FC<Props> = ({ setRegistation }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data: MouseEvent) => {
    signIn('credentials', data);
  };

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.leftSide}>
        <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo" />
        <h2>Sign In</h2>
      </div>
      <form className={styles.rightSide} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" ref={register} />
        <label htmlFor="pin">Pin code:</label>
        <input name="pin" type="password" ref={register} />
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
