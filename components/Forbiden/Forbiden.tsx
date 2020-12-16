import { signIn } from 'next-auth/client';
import styles from './Forbiden.module.scss';

const Forbiden = () => {
  return (
    <div className={styles.forbidenWrapper}>
      <h2>
        Hey there! To view this content you need to{' '}
        <button
          type="button"
          className={styles.btnSignIn}
          onClick={() => signIn()}
        >
          sign in!
        </button>
      </h2>
    </div>
  );
};

export default Forbiden;
