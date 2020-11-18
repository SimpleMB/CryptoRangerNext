import Image from 'next/image'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.sectionLeft}>
        <h1 className={styles.heroHeader}>
        Social Media <span>Advertising</span> for Blockchain Industry
        </h1>
      </section>
      <section className={styles.sectionRight}>
        <Image src='/images/headerImage.svg' width={900} height={650}/>
      </section>
    </div>
  );
}

export default Hero;