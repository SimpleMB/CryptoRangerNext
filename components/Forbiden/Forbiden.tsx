import { signIn } from 'next-auth/client';
import styles from './Forbiden.module.scss';

const Forbiden = () => {
  return (
    <div className={styles.forbidenWrapper}>
      <h2>Hey there!</h2>
      <h3> You don't have permision to view this content</h3>
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
