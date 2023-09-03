import styles from './page.module.css';

async function getTime() {
  const response = await fetch(
    'https://timeapi.io/api/Time/current/zone?timeZone=America/Chicago',
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
      <p>Cache last revalidated at (Chicago): {time}</p>
    </div>
  );
}
