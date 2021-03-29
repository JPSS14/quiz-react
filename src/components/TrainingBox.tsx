import Link from 'next/link';
import styles from '../styles/TrainingBox.module.css';

export function TrainingBox() {
    const prefix = '/quiz-react';
    return (
        <div className={styles.trainingBox}>
            <div className={styles.trainingBoxContent}>
                <Link href="/training-mode">
                    <a>
                        <img src={`${prefix}/shield.webp`} />
                        Treinar
                    </a>
                </Link>
            </div>
        </div>
    );
}