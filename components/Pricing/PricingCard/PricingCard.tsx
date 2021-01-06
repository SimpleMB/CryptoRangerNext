import Link from 'next/link';
import { Review, ReviewType } from '../../../types';
import firstLetterUppercase from '../../../utils/firstLetterUppercase';
import CardPerkList from '../CardPerkList/CardPerkList';
import styles from './PricingCard.module.scss';

interface PricingCardProps {
  data: Review;
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { type, priceCents, saleCents, language, flagUri } = props.data;
  const langUpperCase = firstLetterUppercase(language);

  return (
    <li
      className={[
        type === ReviewType.free ? styles.freeCard : styles.paidCard,
        styles.card,
      ].join(' ')}
    >
      <div>
        <h3 className={styles.cardHeader}>
          <img src={flagUri} alt={`${language} flag`} />
          {type === ReviewType.free ? 'Free' : langUpperCase}
        </h3>
      </div>
      <h4 className={styles.cardPrice}>
        <span>$</span>
        {priceCents / 100}
      </h4>
      <Link href="/projects">
        <a
          className={[
            type === ReviewType.free
              ? styles.requestReviewBtnFree
              : styles.requestReviewBtnPaid,
            styles.requestReviewBtn,
          ].join(' ')}
        >
          Request <span>{langUpperCase}</span> Review
        </a>
      </Link>
      <CardPerkList type={type} lang={language} />
      <div className={type !== ReviewType.free ? styles.cardLine : undefined} />
      <p
        className={
          type === ReviewType.free ? styles.cardDisclaimer : styles.hidden
        }
      >
        * This period may be extended due to high demand for Pro Reviews
      </p>
    </li>
  );
};

export default PricingCard;
