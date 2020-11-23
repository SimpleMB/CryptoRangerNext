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
    <li className={[type === 'free' ? styles.freeCard : styles.paidCard , styles.card].join(' ')}>
      <div className={styles.cardHeader}>
        <h3>
          <Image src={flagUri} height={50} width={100} />
          {type === 'free' ? 'Free' : language.toUpperCase()}
        </h3>
      </div>
      <h4 className={styles.cardPrice}>${priceCents / 100}</h4>
      <Link href="">
        <a className={styles.requestReviewBtn}>Request Review</a>
      </Link>
      <CardPerkList type={type} />
    </li>
  );
};

export default PricingCard;
