import styles from './AboutStats.module.scss';

interface Props {
  views: number;
  subs: number;
  projects: number;
}
const AboutStats: React.FC<Props> = (props) => {
  const { views, subs, projects } = props;
  return (
    <div className={styles.aboutStats}>
      <div className={styles.aboutStatTile}>
        <img
          src="/images/aboutViews.svg"
          alt="tablet with youtube app running"
        />
        <h3>{views}k+ views</h3>
      </div>
      <div className={styles.aboutStatTile}>
        <img src="/images/aboutSubscribers.svg" alt="subscribe sign" />
        <h3>{subs}k+ subs</h3>
      </div>
      <div className={styles.aboutStatTile}>
        <img src="/images/aboutProjects.svg" alt="hands with ok sign" />
        <h3>{projects}+ projects</h3>
      </div>
    </div>
  );
};

export default AboutStats;
