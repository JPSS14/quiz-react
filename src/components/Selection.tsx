import Link from 'next/link';
import styles from '../styles/TrainingHeroes.module.css';
import {QuestionsContext} from '../contexts/QuestionContext';
import { useContext } from 'react';

export default function Selection({imgSelect, route, heroe}) {
    const {startNewQuestion} = useContext(QuestionsContext);


    return(
    <div className={styles.heroe}>
        <Link href={`/training/${route}`}>
            <a>
                <img src={imgSelect} />
                <h2>{heroe}</h2>
            </a>
        </Link>
    </div>
    );
}