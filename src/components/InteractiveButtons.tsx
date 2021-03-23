import { useRouter } from 'next/router';
import heroeStyle from '../styles/Heroe.module.css';
import {QuestionsContext} from '../contexts/QuestionsContext';
import { useContext } from 'react';


export function InteractiveButtons(){
    const router = useRouter();
    const {isActive, start, startNewQuestion, option, corrigirTreino, corrigir} = useContext(QuestionsContext);

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


    return(
        <>
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
        </>
    );
}