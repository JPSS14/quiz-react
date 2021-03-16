import styles from '../styles/ExperienceBar.module.css';
import {QuestionsContext} from '../contexts/QuestionContext';
import { useContext } from 'react';

export function ExperienceBar() {
    const {level} = useContext(QuestionsContext);
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: "50%" }}></div>
                <span className={styles.currentExperience} style={{ left: "50%" }}>50 xp</span>
            </div>
            <span>100 xp</span>
            <p className={styles.levelBar}>MyLevel: {level}</p>
        </header>
    );
}