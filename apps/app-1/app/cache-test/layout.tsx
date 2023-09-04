import styles from './layout.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={styles['container']}>
      <h1>Cache Test</h1>
      {children}
    </main>
  );
}
