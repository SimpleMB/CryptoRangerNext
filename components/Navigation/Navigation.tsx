import Link from "next/link"
import styles from "./Navigation.module.scss"

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign"/>
      <ul className={styles.navList}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <Link href=''><a className={styles.reviewBtn}>Get review</a></Link>
    </nav>
  );
}

export default Navigation;

// TODO : animations when away from top