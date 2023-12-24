'use client';
import HomePageContainer from '@/components/pages/HomePage/HomePageContainer';
import styles from './layout.module.scss'

export default function Home() {
  return (
    <main className={styles.body}>
      <HomePageContainer />
    </main>
  );
}
