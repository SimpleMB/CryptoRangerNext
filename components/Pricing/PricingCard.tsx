import Image from 'next/image';
import Link from 'next/link';
import CardPerkList from './CardPerkList';
import { CardDataTypes } from './Pricing';
import styles from './PricingCard.module.scss';

interface PricingCardProps {
  data: CardDataTypes;
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { type, priceCents, saleCents, language, flagUri } = props.data;

  return (
    <li
      className={[
        type === 'free' ? styles.freeCard : styles.paidCard,
        styles.card,
      ].join(' ')}
    >
      <div>
        <h3 className={styles.cardHeader}>
          <Image src={flagUri} height={50} width={100} />
          {type === 'free' ? 'Free' : language}
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
          Request Review
        </a>
      </Link>
      <CardPerkList type={type} />
      <div className={type !== 'free' && styles.cardLine}></div>
    </li>
  );
};

export default PricingCard;

// TODO: helper function for first letter to uppercase
