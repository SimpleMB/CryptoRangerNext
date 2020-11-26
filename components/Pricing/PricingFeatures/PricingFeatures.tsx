import styles from './PricingFeatures.module.scss';

const PricingFeatures = () => {
  return (
    <div className={styles.pricingFeatures}>
      <h4 className={styles.pricingFeaturesHeader}>
        Additional features of PRO review
      </h4>
      <ul className={styles.perkList}>
        
        <li className={styles.perkListItem}>
          <p className={styles.perkTitle}>
            <img src="/images/perkDotFree.svg" alt="perk dot" />
            Review ready in <span>48h</span>
          </p>
          <p className={styles.perkDescription}>
            We guarantee that review will be ready for your approval in 48
            hours from receiving payment.
          </p>
        </li>
        <li className={styles.perkListItem}>
          <p className={styles.perkTitle}>
            <img src="/images/perkDotFree.svg" alt="perk dot" />
            <span>Scheduled</span> publishing
          </p>
          <p className={styles.perkDescription}>
            You can choose date and time of review going live. It’s easy to sync
            it with air drops, contests or traffic analitics.
          </p>
        </li>
        <li className={styles.perkListItem}>
          <p className={styles.perkTitle}>
            <img src="/images/perkDotFree.svg" alt="perk dot" />
            <span>Publishing</span> approval
          </p>
          <p className={styles.perkDescription}>
            Before your review will go live, we will send you a private link to
            the video for your consideration. If something is wrong, you can
            easily cancel/postpone publication.
          </p>
        </li>
        <li className={styles.perkListItem}>
          <p className={styles.perkTitle}>
            <img src="/images/perkDotFree.svg" alt="perk dot" />
            <span>Additional</span> information
          </p>
          <p className={styles.perkDescription}>
            You can provide additional information in description section of the
            video. Links, sale codes, documents, etc.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PricingFeatures;
