import Link from "next/link";
import styles from '../styles/PlayBox.module.css';

export function PlayBox() {
    return (
        <div className={styles.playBox}>
            <div className={styles.playBoxContent}>
                <Link href="/play">
                    <a>
                        <img src="captain-america-shield.png" />
                    Jogar
                </a>
                </Link>
            </div>
        </div>
    );
}