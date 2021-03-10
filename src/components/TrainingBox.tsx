import Link from 'next/link';
import styles from '../styles/TrainingBox.module.css';

export function TrainingBox() {
    return (
        <div className={styles.trainingBox}>
            <div className={styles.trainingBoxContent}>
                <Link href="/select">
                    <a>
                        <img src="shield.webp" />
                        Treinar
                    </a>
                </Link>
            </div>
        </div>
    );
}