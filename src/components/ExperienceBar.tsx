import styles from '../styles/ExperienceBar.module.css';

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: "50%"}}></div>
                <span className={styles.currentExperience} style={{left: "50%"}}>50 xp</span>
            </div>
            <span>100 xp</span>
        </header>
    );
}