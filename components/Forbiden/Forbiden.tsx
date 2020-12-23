import { signIn } from 'next-auth/client';
import styles from './Forbiden.module.scss';

const Forbiden = () => {
  return (
    <div className={styles.forbidenWrapper}>
      <h2>Hey there! You don't have permision to view this content</h2>
      <button
        type="button"
        className={styles.signInBtn}
        onClick={() => signIn()}
      >
        Sign In!
      </button>
    </div>
  );
};

export default Forbiden;
