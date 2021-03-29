import heroeStyle from '../styles/Heroe.module.css';
import { QuestionsContext } from '../contexts/QuestionsContext';
import { useContext } from 'react';
import { Alternative } from '../components/Alternative';
import { useRouter } from 'next/router';

export function MixerAlternatives() {
    const router = useRouter();
    const prefix = '/quiz-react';
    const img = `${prefix}/c-${router.query.heroe}-dif.png`;
    const { isActive, option, activeQuestion } = useContext(QuestionsContext);
    return (
        <>
            {isActive && option === 1 ? (
                <div className={heroeStyle.mainQuestion}>
                    <p>{activeQuestion.question}</p>
                    <Alternative activeAlternative1={activeQuestion.answer} activeAlternative2={activeQuestion.alternative1} activeAlternative3={activeQuestion.alternative2} activeAlternative4={activeQuestion.alternative3} />
                </div>
            ) : isActive && option === 2 ? (
                <div className={heroeStyle.mainQuestion}>
                    <p>{activeQuestion.question}</p>
                    <Alternative activeAlternative1={activeQuestion.alternative1} activeAlternative2={activeQuestion.answer} activeAlternative3={activeQuestion.alternative2} activeAlternative4={activeQuestion.alternative3} />
                </div>
            ) : isActive && option === 3 ? (
                <div className={heroeStyle.mainQuestion}>
                    <p>{activeQuestion.question}</p>
                    <Alternative activeAlternative1={activeQuestion.alternative1} activeAlternative2={activeQuestion.alternative2} activeAlternative3={activeQuestion.answer} activeAlternative4={activeQuestion.alternative3} />
                </div>
            ) : isActive && option === 4 ? (
                <div className={heroeStyle.mainQuestion}>
                    <p>{activeQuestion.question}</p>
                    <Alternative activeAlternative1={activeQuestion.alternative1} activeAlternative2={activeQuestion.alternative2} activeAlternative3={activeQuestion.alternative3} activeAlternative4={activeQuestion.answer} />
                </div>
            ) : (
                <div className={heroeStyle.heroeSelected}>
                    <div className={heroeStyle.heroeSelectedImg}>
                        <img src={img} alt={img} />
                    </div>
                </div>
            )}
        </>
    );
}