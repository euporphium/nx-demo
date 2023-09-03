import { Clock } from '@nx-demo/ui';
import styles from './page.module.css';

const timeZone = 'America/Chicago';

async function getTime() {
  const response = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
    { next: { tags: ['tag-test'] } }
  );
  const { dateTime } = await response.json();
  return new Date(dateTime).toLocaleTimeString();
}

/* eslint-disable-next-line */
export interface RevalidateTagProps {}

export default async function RevalidateTag(props: RevalidateTagProps) {
  const time = await getTime();

  return (
    <div className={styles['container']}>
      <h1>On-demand Revalidation By Cache Tag</h1>
      <Clock timeZone={timeZone} />
      <p>Cache last revalidated: {time}</p>
    </div>
  );
}
