import Image from 'next/image';
import Link from 'next/link';
import { cardDataTypes } from './Pricing';
import styles from './PricingCard.module.scss';

interface PricingCardProps {
  data: cardDataTypes;
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { type, priceCents, saleCents, language, flagUri, perks } = props.data;
  return (
    <li className={type === 'free' ? styles.freeCard : styles.paidCard}>
      <div className={styles.cardHeader}>
        <Image src={flagUri} height={200} width={100} />
        <h3>{language.toUpperCase()}</h3>
      </div>
      <Link href=''>
        <a className={styles.requestReviewBtn}>Request Review</a>
      </Link>
      <ul>

      </ul>
    </li>
  );
};

export default PricingCard;


// TODO: Perks list with title and description and perk component