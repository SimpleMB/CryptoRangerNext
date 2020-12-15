/* eslint-disable jsx-a11y/label-has-associated-control */
import { signIn } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { MouseEvent } from 'react';
import styles from './Register.module.scss';

interface Props {
  setRegistation: (arr: boolean) => void;
}

const Register: React.FC<Props> = ({ setRegistation }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data: MouseEvent) => {
    signIn('credentials', data);
  };
  return (
    <main className={styles.loginWrapper}>
      <div className={styles.leftSide}>
        <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo" />
        <h2>Sign Up</h2>
      </div>
      <form className={styles.rightSide} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" ref={register} />
        <label htmlFor="pin">Pin code:</label>
        <input name="pin" type="password" ref={register} />
        <label htmlFor="pinConfirmation">Pin confirmation:</label>
        <input name="pinConfirmation" type="password" ref={register} />
        <button type="submit" className={styles.signInBtn}>
          Sign up
        </button>
        <button
          type="button"
          onClick={() => setRegistation(false)}
          className={styles.regBtn}
        >
          Already a user? Click here to sign in!
        </button>
      </form>
    </main>
  );
};

export default Register;
