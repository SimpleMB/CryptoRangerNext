import Image from 'next/image';
import styles from './Clients.module.scss';

const Clients = () => {
  return (
    <section className={styles.clients}>
      <h3 className={styles.clientsHeader}>Clients</h3>
      <ul className={styles.clientsList}>
        <li>
          <Image src="/images/clientsCryptoExpo.png" width={225} height={150} />
        </li>
        <li>
          <Image src="/images/clientsPhore.png" width={365} height={111} />
        </li>
        <li className={styles.clientsCherrio}>
          <Image src="/images/clientsCherrio.png" width={390} height={120} />
        </li>
        <li>
          <Image src="/images/clientsGentarium.png" width={519} height={159} />
        </li>
      </ul>
    </section>
  );
};

export default Clients;
