import styles from '../styles/main.module.css';
import {TrainingHeroes} from '../components/TrainingHeroes';
import {QuestionsContext} from '../contexts/QuestionContext';
import { useContext } from 'react';

export default function Training() {
    const {resetQuestion} = useContext(QuestionsContext);

    resetQuestion();
    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Escolha um Herói</h1>
            </div>
            <div className={styles.mainContent}>
                <TrainingHeroes/>
            </div>
        </main>
    );
}