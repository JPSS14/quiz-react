import Link from 'next/link';
import styles from '../styles/TrainingHeroes.module.css';
import {QuestionsContext} from '../contexts/QuestionsContext';
import { useContext } from 'react';

export default function Selection({imgSelect, route, heroe, pathname}) {
    const {startNewQuestion} = useContext(QuestionsContext);
    const prefix = '/quiz-react';

    return(
    <div className={styles.heroe}>
        <Link href={`/${pathname}/${route}`}>
            <a>
                <img src={imgSelect} />
                <h2>{heroe}</h2>
            </a>
        </Link>
    </div>
    );
}