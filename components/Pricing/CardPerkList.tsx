import styles from './CardPerkList.module.scss';
import { CardDataTypes } from './Pricing';

interface CardPerkListProps {
  type: CardDataTypes['type'];
  lang: 'Polish' | 'English';
}

const CardPerkList: React.FC<CardPerkListProps> = (props) => {
  const { type, lang } = props;

  const freePerks = (
    <ul className={styles.perkList}>
      <li className={styles.perkListItem}>
        <p>
          <img src="/images/perkDotFree.svg" alt="perk dot" /> Review ready in 7
          days*
        </p>
      </li>
    </ul>
  );

  const paidPerks = (
    <ul className={styles.perkList}>
      <li className={styles.perkListItem}>
        <p>
          <img src="/images/perkDot.svg" alt="perk dot" />
          Review in <span>{lang}</span> language
        </p>
      </li>
      <li className={styles.perkListItem}>
        <p>
          <img src="/images/perkDot.svg" alt="perk dot" />
          Review ready in <span>48h</span>
        </p>
      </li>
      <li className={styles.perkListItem}>
        <p>
          <img src="/images/perkDot.svg" alt="perk dot" />
          <span>Scheduled</span> publishing
        </p>
      </li>
      <li className={styles.perkListItem}>
        <p>
          <img src="/images/perkDot.svg" alt="perk dot" />
          <span>Publishing</span> approval
        </p>
      </li>
      <li className={styles.perkListItem}>
        <p>
          <img src="/images/perkDot.svg" alt="perk dot" />
          <span>Additional</span> information
        </p>
      </li>
    </ul>
  );

  return type === 'free' ? freePerks : paidPerks;
};

export default CardPerkList;
