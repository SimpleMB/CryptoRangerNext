import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const scrollToId = (e: React.MouseEvent<HTMLButtonElement>) => {
    const destinationId = e.currentTarget.getAttribute('data-href');
    const desctinationElement = document.querySelector(destinationId);
    desctinationElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={styles.navigation}>
      <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />
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
      <Link href="">
        <button type="button" className={styles.reviewBtn}>
          Get review
        </button>
      </Link>
    </nav>
  );
};

export default Navigation;
// TODO : animations when away from top
