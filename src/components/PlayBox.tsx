import Link from "next/link";
import styles from '../styles/PlayBox.module.css';

export function PlayBox() {
    const prefix = '/quiz-react';
    return (
        <div className={styles.playBox}>
            <div className={styles.playBoxContent}>
                <Link href="/play-mode">
                    <a>
                        <img src={`${prefix}captain-america-shield.png`} />
                    Jogar
                </a>
                </Link>
            </div>
        </div>
    );
}