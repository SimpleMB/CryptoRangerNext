import { Languages, Review, ReviewType } from '../../types';
import styles from './Pricing.module.scss';
import PricingCard from './PricingCard/PricingCard';
import PricingFeatures from './PricingFeatures/PricingFeatures';
import prices from '../../utils/dummies/prices.json';

const pricingCardsData: Review[] = [
  {
    id: 0,
    type: ReviewType.free,
    priceCents: prices.free.priceCents,
    saleCents: prices.free.salePriceCents,
    language: Languages.polish,
    flagUri: '/images/plFlag.svg',
  },
  {
    id: 1,
    type: ReviewType.paid,
    priceCents: prices.english.priceCents,
    saleCents: prices.english.salePriceCents,
    language: Languages.english,
    flagUri: '/images/gbFlag.svg',
  },
  {
    id: 2,
    type: ReviewType.paid,
    priceCents: prices.polish.priceCents,
    saleCents: prices.polish.salePriceCents,
    language: Languages.polish,
    flagUri: '/images/plFlag.svg',
  },
];

const Pricing = () => {
  const pricingList = pricingCardsData.map((card) => (
    <PricingCard data={card} key={card.id} />
  ));

  return (
    <section className={styles.pricing} id="pricing">
      <h3 className={styles.pricingHeader}>Pricing</h3>
      <ul className={styles.pricingList}>{pricingList}</ul>
      <PricingFeatures />
    </section>
  );
};

export default Pricing;
