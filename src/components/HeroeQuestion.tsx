import { useRouter } from 'next/router';
import styles from '../styles/main.module.css';
import heroeStyle from '../styles/Heroe.module.css';
import questions from '../../questions.json';
import { useContext, useEffect, useState } from 'react';
import { QuestionsContext } from '../contexts/QuestionContext';
import { Alternative } from '../components/Alternative';

export function HeroeQuestion() {
    const router = useRouter();
    const { activeQuestion, startNewQuestion, isActive, start, corrigir, corrigirTreino, activeCorrection, option } = useContext(QuestionsContext);

    const [alternative, setAlternative] = useState("");

    // startNewQuestion(router.query.heroe);

    

    useEffect(() => {
        if (isActive === true) {
            start();
        }
    }, []);

    function active() {
        start();
        // buildAllQuestions(router.query.heroe);
        startNewQuestion(router.query.heroe);
        console.log(option);
    }

    function correctionTreino() {
        corrigirTreino();
    }

    function correction() {
        corrigir();
    }

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

            {/* Regra de negócio do treino: Não ganha xp */}
            {isActive && router.pathname === "/training/[heroe]" ? (
                <div className={heroeStyle.option}>
                    <button className={heroeStyle.buttonCorrection} onClick={correctionTreino}>Corrigir</button>
                    <button className={heroeStyle.buttonCancel} onClick={start}>Desistir</button>
                </div>
            ) : isActive && router.pathname === "/play/[heroe]" ? (
                <div className={heroeStyle.option}>
                    <button className={heroeStyle.buttonCorrection} onClick={correction}>Corrigir</button>
                    <button className={heroeStyle.buttonCancel} onClick={start}>Desistir</button>
                </div>
            ) : (
                <button id="startButton" className={heroeStyle.buttonStart} onClick={active}>Iniciar Quiz!</button>
            )}

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