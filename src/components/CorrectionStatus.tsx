import heroeStyle from '../styles/Heroe.module.css';
import {QuestionsContext} from '../contexts/QuestionsContext';
import { useContext } from 'react';

export function CorrectionStatus() {
    const {activeCorrection} = useContext(QuestionsContext);
    return (
        <>
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
        </>
    );
}