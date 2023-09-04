import { Metadata } from 'next';
import { Clock } from '@nx-demo/ui';
// import styles from './page.module.css';

const revalidateSeconds = 20;
const timeZone = 'America/New_York';

export const metadata: Metadata = {
  title: 'Time-based Revalidation',
};

async function getTime() {
  const response = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
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
    <>
      <h2>Time-based Revalidation - {revalidateSeconds} seconds</h2>
      <Clock timeZone={timeZone} />
      <p>Cache last revalidated: {time}</p>
    </>
  );
}
