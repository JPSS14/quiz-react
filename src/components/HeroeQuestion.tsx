import { useRouter } from 'next/router';
import styles from '../styles/main.module.css';
import heroeStyle from '../styles/Heroe.module.css';
import { useContext, useEffect } from 'react';
import { QuestionsContext } from '../contexts/QuestionsContext';
import { InteractiveButtons } from '../components/InteractiveButtons';
import { CorrectionStatus } from '../components/CorrectionStatus';
import { MixerAlternatives } from '../components/MixerAlternatives';

export function HeroeQuestion() {
    const router = useRouter();
    const { isActive, start } = useContext(QuestionsContext);
    const prefix = '/quiz-react';
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

                <MixerAlternatives />

                <div className={heroeStyle.background}>
                    <img src={`${prefix}/${router.query.heroe}-back.jpg`} alt={`${router.query.heroe}`} />
                </div>

            </div>

            <InteractiveButtons />
            <CorrectionStatus />

        </main>
    );
}