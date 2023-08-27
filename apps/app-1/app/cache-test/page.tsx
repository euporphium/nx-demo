import styles from './page.module.css';

async function getLondonTime() {
  const response = await fetch(
    'https://timeapi.io/api/Time/current/zone?timeZone=Europe/London',
    { next: { revalidate: 20 } }
  );
  const { dateTime } = await response.json();
  return new Date(dateTime).toLocaleTimeString();
}

/* eslint-disable-next-line */
export interface CacheTestProps {}

export default async function CacheTest(props: CacheTestProps) {
  const time = await getLondonTime();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Cache Test!</h1>
      <p>Current time in London: {time}</p>
    </div>
  );
}
