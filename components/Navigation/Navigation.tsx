import { signIn } from 'next-auth/client';
import Link from 'next/link';
import styles from './Navigation.module.scss';

interface Props {
  extended?: boolean;
}

const Navigation: React.FC<Props> = ({ extended }) => {
  const scrollToId = (e: React.MouseEvent<HTMLButtonElement>) => {
    const destinationId = e.currentTarget.getAttribute('data-href');
    const desctinationElement = document.querySelector(destinationId);
    desctinationElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />
      </Link>
      {extended && (
        <ul className={styles.navList}>
          <li>
            <button type="button" data-href="#home" onClick={scrollToId}>
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              data-href="#about"
              onClick={scrollToId}
              data-active
            >
              About
            </button>
          </li>
          <li>
            <button type="button" data-href="#clients" onClick={scrollToId}>
              Clients
            </button>
          </li>
          <li>
            <button type="button" data-href="#pricing" onClick={scrollToId}>
              Pricing
            </button>
          </li>
        </ul>
      )}
      <button
        type="button"
        className={styles.reviewBtn}
        onClick={() => signIn()}
      >
        Login to dashboard
      </button>
      {/* <Link href="/projects">
        <a>
          <button type="button" className={styles.reviewBtn}>
            Get review
          </button>
        </a>
      </Link> */}
    </nav>
  );
};

export default Navigation;
// TODO : animations when away from top
// TODO: create new component with ul NavList
