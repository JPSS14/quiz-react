import { useRouter } from 'next/router';
import styles from '../styles/main.module.css';
import heroeStyle from '../styles/Heroe.module.css';
import questions from '../../questions.json';
import { useContext, useEffect, useState } from 'react';
import { QuestionsContext } from '../contexts/QuestionsContext';
import { Alternative } from '../components/Alternative';
import {InteractiveButtons} from '../components/InteractiveButtons';

export function HeroeQuestion() {
    const router = useRouter();
    const { activeQuestion, isActive, start, activeCorrection, option } = useContext(QuestionsContext);

    const [alternative, setAlternative] = useState("");

    // startNewQuestion(router.query.heroe);

    

    useEffect(() => {
        if (isActive === true) {
            start();
        }
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Responda</h1>
            </div>
            <div className={heroeStyle.mainContainer}>

                {isActive && option === 1 ? (
                    <div className={heroeStyle.mainQuestion}>
                        <p>{activeQuestion.question}</p>
                        <Alternative alternatives={alternative} activeAlternative1={activeQuestion.answer} activeAlternative2={activeQuestion.alternative1} activeAlternative3={activeQuestion.alternative2} activeAlternative4={activeQuestion.alternative3} />
                    </div>
                ) : isActive && option === 2 ?(
                    <div className={heroeStyle.mainQuestion}>
                        <p>{activeQuestion.question}</p>
                        <Alternative alternatives={alternative} activeAlternative1={activeQuestion.alternative1} activeAlternative2={activeQuestion.answer} activeAlternative3={activeQuestion.alternative2} activeAlternative4={activeQuestion.alternative3} />
                    </div>
                ) : isActive && option === 3 ?(
                    <div className={heroeStyle.mainQuestion}>
                        <p>{activeQuestion.question}</p>
                        <Alternative alternatives={alternative} activeAlternative1={activeQuestion.alternative1} activeAlternative2={activeQuestion.alternative2} activeAlternative3={activeQuestion.answer} activeAlternative4={activeQuestion.alternative3} />
                    </div>
                ) : isActive && option === 4 ? (
                    <div className={heroeStyle.mainQuestion}>
                        <p>{activeQuestion.question}</p>
                        <Alternative alternatives={alternative} activeAlternative1={activeQuestion.alternative1} activeAlternative2={activeQuestion.alternative2} activeAlternative3={activeQuestion.alternative3} activeAlternative4={activeQuestion.answer} />
                    </div>
                ) : (
                    <div className={heroeStyle.mainQuestion}>

                    </div>
                )}

                <div className={heroeStyle.background}>
                    <img src={`/${router.query.heroe}-back.jpg`} alt={`${router.query.heroe}`} />
                </div>
            </div>

            <InteractiveButtons/>

            {activeCorrection === "Certo" ? (
                <div className={heroeStyle.certo}>
                    <p>Correto</p>
                </div>
            ) : activeCorrection === "Errado" ? (
                <div className={heroeStyle.errado}>
                    <p>Errado</p>
                </div>
            ) : (
                <>
                </>
            )}


        </main>
    );
}