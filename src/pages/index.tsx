import { TrainingBox } from '../components/TrainingBox';
import { PlayBox } from '../components/PlayBox';

import Head from 'next/head';
import styles from '../styles/main.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.mainTitle}>
          <h1>Quiz Vingadores</h1>
        </div>
        <div className={styles.mainContent}>
          <TrainingBox />
          <PlayBox />
        </div>
      </main>
    </>
  );
}
