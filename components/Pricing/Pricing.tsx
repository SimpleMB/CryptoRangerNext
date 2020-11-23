import styles from './Pricing.module.scss';
import PricingCard from './PricingCard';

export interface PerksData {
  id: number;
  title: string;
  description: string;
}

export interface CardDataTypes {
  type: 'free' | 'paid';
  priceCents: number;
  saleCents: number;
  language: 'polish' | 'english' | 'german' | 'russian';
  flagUri: string;
}



const pricingCardsData: CardDataTypes[] = [
  {
    type: 'free',
    priceCents: 0,
    saleCents: 0,
    language: 'polish',
    flagUri: '/polishFlag.png',
  },
  {
    type: 'paid',
    priceCents: 15000,
    saleCents: 5000,
    language: 'english',
    flagUri: '/engilshFlag.png',
  },
  {
    type: 'paid',
    priceCents: 15000,
    saleCents: 5000,
    language: 'polish',
    flagUri: '/engilshFlag.png',
  },
];

const Pricing = () => {
  const pricingList = pricingCardsData.map((card) => (
    <PricingCard data={card} />
  ));
  return (
    <section className={styles.pricing} id="pricing">
      <h3 className={styles.pricingHeader}>Pricing</h3>
      <ul className={styles.pricingList}>{pricingList}</ul>
    </section>
  );
};

export default Pricing;
