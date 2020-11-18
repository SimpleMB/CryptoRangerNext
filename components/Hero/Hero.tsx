import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.sectionLeft}>
        <h1>
        Social Media <span>Advertising</span> for Blockchain Industry
        </h1>
      </section>
      <section className={styles.sectionRight}>
        Image
      </section>
    </div>
  );
}

export default Hero;