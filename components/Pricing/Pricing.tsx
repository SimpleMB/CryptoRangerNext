import styles from './Pricing.module.scss';

interface priceCardType {
  type: 'free' | 'paid';
  priceCents: number;
  saleCents: number;
  language: 'polish' | 'english' | 'german' | 'russian';
  flagUri: string
  perks: string[];
}

const pricingCardsArr: priceCardType[] = [
  {
    type: 'free',
    priceCents: 0,
    saleCents: 0,
    language: 'polish',
    flagUri: '/polishFlag.png',
    perks: ['Review ready in 7 days'],
  },
  {
    type: 'paid',
    priceCents: 15000,
    saleCents: 5000,
    language: 'english',
    flagUri: '/engilshFlag.png',
    perks: [
      'Review ready in 48h',
      'Scheduled publishing',
      'Publishing approval',
      'Additional information provided in video description',
    ],
  },
  {
    type: 'paid',
    priceCents: 15000,
    saleCents: 5000,
    language: 'polish',
    flagUri: '/engilshFlag.png',
    perks: [
      'Review ready in 48h',
      'Scheduled publishing',
      'Publishing approval',
      'Additional information provided in video description',
    ],
  },
];

const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <h3 className={styles.pricingHeader}>Pricing</h3>
    </section>
  );
};

export default Pricing;
