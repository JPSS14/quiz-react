import Link from 'next/link';
import styles from '../styles/TrainingHeroes.module.css';

export default function Selection({imgSelect, route, heroe}) {
    return(
    <div className={styles.heroe}>
        <Link href={`/${route}`}>
            <a>
                <img src={imgSelect} />
                <h2>{heroe}</h2>
            </a>
        </Link>
    </div>
    );
}