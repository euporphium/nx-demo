'use client';

import { useEffect, useState } from 'react';
import styles from './clock.module.css';

export interface ClockProps {
  timeZone?: string;
}

export function Clock(props: ClockProps) {
  const { timeZone } = props;

  const [time, setTime] = useState<Date>();
  const formattedTime = time?.toLocaleTimeString('en-US', { timeZone });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles['container']}>
      <p>
        Current time is {formattedTime} ({timeZone})
      </p>
    </div>
  );
}

export default Clock;
