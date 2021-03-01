import { signIn } from 'next-auth/client';
import Navigation from '../Navigation/Navigation';
import styles from './Forbiden.module.scss';

const Forbiden = () => {
  return (
    <>
      <Navigation />
      <div className={styles.forbidenWrapper}>
        <h3>Hey there!</h3>
        <p>
          Before you get access to your project's dashboard please click the
          button below
        </p>
        <button
          type="button"
          className={styles.signInBtn}
          onClick={() => signIn()}
        >
          Sign In!
        </button>
      </div>
    </>
  );
};

export default Forbiden;
