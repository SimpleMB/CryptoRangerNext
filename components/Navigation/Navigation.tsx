import { signIn } from 'next-auth/client';
import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const destinationId = e.currentTarget.getAttribute('data-href');
    const desctinationElement = document.querySelector(destinationId);
    desctinationElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={styles.navigation}>
      <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />
      <ul className={styles.navList}>
        <li>
          <a data-href="#home" onClick={scrollToId}>
            Home
          </a>
        </li>
        <li>
          <a data-href="#about" onClick={scrollToId} data-active>
            About
          </a>
        </li>
        <li>
          <a data-href="#clients" onClick={scrollToId}>
            Clients
          </a>
        </li>
        <li>
          <a data-href="#pricing" onClick={scrollToId}>
            Pricing
          </a>
        </li>
      </ul>
      <button onClick={signIn}>hello</button>
      <Link href="">
        <a className={styles.reviewBtn}>Get review</a>
      </Link>
    </nav>
  );
};

export default Navigation;

// TODO : animations when away from top
