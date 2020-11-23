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
  perksList: PerksData[];
}

const perks: PerksData[] = [
  {
    id: 0,
    title: 'Review ready in 7 days*',
    description:
      '* This period may be extended due of high demand for Pro Reviews ',
  },
  {
    id: 1,
    title: 'Review ready in 48h',
    description:
      'We guarantee that your review will be ready for your approval in 48 hours from receiving payment.',
  },
  {
    id: 2,
    title: 'Scheduled publishing',
    description:
      'You can choose date and time of review going live. It’s easy to sync it with air drops, contests or traffic analitics.',
  },
  {
    id: 3,
    title: 'Publishing approval',
    description:
      'Before your review will go public, we will send you private link to the video for your consideration. If something is wrong, you can easily cancel publication.',
  },
  {
    id: 4,
    title: 'Additional information',
    description:
      'You can provide additional information in description section of the video: links, sale codes, documents, etc.',
  },
];

const pricingCardsData: CardDataTypes[] = [
  {
    type: 'free',
    priceCents: 0,
    saleCents: 0,
    language: 'polish',
    flagUri: '/polishFlag.png',
    perksList: [perks[0]],
  },
  {
    type: 'paid',
    priceCents: 15000,
    saleCents: 5000,
    language: 'english',
    flagUri: '/engilshFlag.png',
    perksList: [...perks.slice(1)],
  },
  {
    type: 'paid',
    priceCents: 15000,
    saleCents: 5000,
    language: 'polish',
    flagUri: '/engilshFlag.png',
    perksList: [...perks.slice(1)],
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
