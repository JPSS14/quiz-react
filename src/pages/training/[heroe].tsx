import { useRouter } from 'next/router';
import styles from '../../styles/main.module.css';
import heroeStyle from '../../styles/Heroe.module.css';
import questions from '../../../questions.json';
import { useContext, useEffect, useState } from 'react';
import { QuestionsContext } from '../../contexts/QuestionContext';

export default function Heroe() {
    const router = useRouter();
    const { activeQuestion, startNewQuestion, isActive, start, corrigir, desistir } = useContext(QuestionsContext);

    const [alternative, setAlternative] = useState("");

    // startNewQuestion(router.query.heroe);

    useEffect(() => {
        if(isActive === true){
            start();
        }
    }, []);


    function active(){
        start();
        // buildAllQuestions(router.query.heroe);
        startNewQuestion(router.query.heroe);
    }


    const lis = questions;

    console.log(isActive);

    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Responda</h1>
            </div>
            <div className={heroeStyle.mainContainer}>

                {isActive ? (
                    <div className={heroeStyle.mainQuestion}>
                        <p>{activeQuestion.question}</p>
                        <p>terte: {alternative}</p>
                        <div>
                            <input type="radio" id="a1" checked={alternative === activeQuestion.alternative1} value={activeQuestion.alternative1} onChange={(e) => {setAlternative(e.target.value)}}></input>
                            <label htmlFor="a1">{activeQuestion.alternative1}</label>
                        </div>
                        <div>
                            <input type="radio" id="a2" checked={alternative === activeQuestion.alternative2} value={activeQuestion.alternative2} onChange={(e) => {setAlternative(e.target.value)}}></input>
                            <label htmlFor="a2">{activeQuestion.alternative2}</label>
                        </div>
                        <div>
                            <input type="radio" id="a3" checked={alternative === activeQuestion.alternative3} value={activeQuestion.alternative3} onChange={(e) => {setAlternative(e.target.value)}}></input>
                            <label htmlFor="a3">{activeQuestion.alternative3}</label>
                        </div>
                        <div>
                            <input type="radio" id="a4" checked={alternative === activeQuestion.answer} value={activeQuestion.answer} onChange={(e) => {setAlternative(e.target.value)}}></input>
                            <label htmlFor="a4">{activeQuestion.answer}</label>
                        </div>
                    </div>
                ) : (
                    <div className={heroeStyle.mainQuestion}>

                    </div>
                )}

                <div className={heroeStyle.background}>
                    <img src={`/${router.query.heroe}-back.jpg`} alt={`${router.query.heroe}`} />
                </div>
            </div>

            {isActive ? (
                <div className={heroeStyle.option}>
                    <button className={heroeStyle.buttonCorrection} onClick={corrigir}>Corrigir</button>
                    <button className={heroeStyle.buttonCancel} onClick={start}>Desistir</button>
                </div>
            ) : (
                <button id="startButton" className={heroeStyle.buttonStart} onClick={active}>Iniciar Quiz!</button>
            )}
            

        </main>
    );
}