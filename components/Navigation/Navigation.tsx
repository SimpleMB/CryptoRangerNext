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
          <a data-href="#home" onClick={scrollToId} href="">
            Home
          </a>
        </li>
        <li>
          <a data-href="#about" onClick={scrollToId} data-active href="">
            About
          </a>
        </li>
        <li>
          <a data-href="#clients" onClick={scrollToId} href="">
            Clients
          </a>
        </li>
        <li>
          <a data-href="#pricing" onClick={scrollToId} href="">
            Pricing
          </a>
        </li>
      </ul>
      <button type="button" onClick={() => signIn()}>
        hello
      </button>
      <Link href="">
        <a className={styles.reviewBtn} href="">
          Get review
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
// TODO: fix a to buttons coz a11y
// TODO : animations when away from top
