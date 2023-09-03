import styles from './page.module.css';

const revalidateSeconds = 20;

async function getTime() {
  const response = await fetch(
    'https://timeapi.io/api/Time/current/zone?timeZone=Europe/London',
    { next: { revalidate: revalidateSeconds } }
  );
  const { dateTime } = await response.json();
  return new Date(dateTime).toLocaleTimeString();
}

/* eslint-disable-next-line */
export interface RevalidateTimerProps {}

export default async function RevalidateTimer(props: RevalidateTimerProps) {
  const time = await getTime();

  return (
    <div className={styles['container']}>
      <h1>Time-based Revalidation</h1>
      <p>This time value invalidates every {revalidateSeconds} seconds</p>
      <p>Cache last revalidated at (London): {time}</p>
    </div>
  );
}
