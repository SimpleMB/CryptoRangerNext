import Link from "next/link"
import Logo from "../Logo/Logo"
import styles from "./Navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo width={125} height={60}/>
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

// TODO : try encapsulate Logo element with <div> and don't provide dimensions

// TODO : animations when away from top