import styles from '../styles/ExperienceBar.module.css';
import {QuestionsContext} from '../contexts/QuestionContext';
import { useContext } from 'react';

export function ExperienceBar() {
    const {level, currentExperience, experienceToNextLevel} = useContext(QuestionsContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
            <p className={styles.levelBar}>MyLevel: {level}</p>
        </header>
    );
}