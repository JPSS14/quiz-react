import { useRouter } from 'next/router';
import styles from '../../styles/main.module.css';
import heroeStyle from '../../styles/Heroe.module.css';
import questions from '../../../questions.json';
import { useContext, useEffect, useState } from 'react';
import {QuestionsContext} from '../../contexts/QuestionContext';

export default function Heroe() {
    const router = useRouter();
    const {activeQuestion, startNewQuestion} = useContext(QuestionsContext);
    const [heroeList, setHeroeList] = useState([]);

    startNewQuestion();

    // useEffect(() => {
    //     startNewQuestion();
    // }, []);

    const lis = questions;

    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Responda</h1>
            </div>
            <div className={heroeStyle.mainContainer}>
                <div className={heroeStyle.mainQuestion}>
                    <p>{activeQuestion.question}</p>
                    <div>
                        <input type="radio" name="alternativa" id="a1" value="Marq-1"></input>
                        <label htmlFor="a1">Marq-1</label>
                    </div>
                    <div>
                        <input type="radio" name="alternativa" id="a2" value="Machine-1"></input>
                        <label htmlFor="a2">Machine-1</label>
                    </div>
                    <div>
                        <input type="radio" name="alternativa" id="a3" value="Mark-1"></input>
                        <label htmlFor="a3">Mark-1</label>
                    </div>
                    <div>
                        <input type="radio" name="alternativa" id="a4" value="Armor-1"></input>
                        <label htmlFor="a4">Armor-1</label>
                    </div>
                </div>
                <div className={heroeStyle.background}>
                    <img src={`/${router.query.heroe}-back-3.jpg`} alt={`${router.query.heroe}`} />
                </div>
            </div>
            <div className={heroeStyle.option}>
                <button className={heroeStyle.buttonCorrection}>Corrigir</button>
                <button className={heroeStyle.buttonCancel}>Desistir</button>
            </div>
        </main>
    );
}