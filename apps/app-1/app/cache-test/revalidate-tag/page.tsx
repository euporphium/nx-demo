import { revalidateTag } from 'next/cache';
import { Clock } from '@nx-demo/ui';
// import styles from './page.module.css';

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

  const submit = async () => {
    'use server';
    revalidateTag('tag-test');
  };

  return (
    <>
      <h2>On-demand Revalidation - Cache Tag</h2>
      <Clock timeZone={timeZone} />
      <p>Cache last revalidated: {time}</p>
      <form action={submit}>
        <button type="submit">Manually Revalidate Cache</button>
      </form>
    </>
  );
}
