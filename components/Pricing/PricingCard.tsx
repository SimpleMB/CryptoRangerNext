import Link from 'next/link';
import firstLetterUppercase from '../../utils/firstLetterUppercase';
import CardPerkList from './CardPerkList';
import { CardDataTypes } from './Pricing';
import styles from './PricingCard.module.scss';

interface PricingCardProps {
  data: CardDataTypes;
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { type, priceCents, saleCents, language, flagUri } = props.data;
  const langUpperCase = firstLetterUppercase(language);

  return (
    <li
      className={[
        type === 'free' ? styles.freeCard : styles.paidCard,
        styles.card,
      ].join(' ')}
    >
      <div>
        <h3 className={styles.cardHeader}>
          <img src={flagUri} alt={language + ' flag'} />
          {type === 'free' ? 'Free' : langUpperCase}
        </h3>
      </div>
      <h4 className={styles.cardPrice}>
        <span>$</span>
        {priceCents / 100}
      </h4>
      <Link href="">
        <a
          className={[
            type === 'free'
              ? styles.requestReviewBtnFree
              : styles.requestReviewBtnPaid,
            styles.requestReviewBtn,
          ].join(' ')}
        >
          Request <span>{langUpperCase}</span> Review
        </a>
      </Link>
      <CardPerkList type={type} lang={langUpperCase}/>
      <div className={type !== 'free' ? styles.cardLine : undefined}></div>
    </li>
  );
};

export default PricingCard;
