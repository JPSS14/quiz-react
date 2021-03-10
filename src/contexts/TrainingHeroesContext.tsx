import { createContext } from 'react';
import questions from '../../questions.json';

interface Questions {
    heroe: string,
    idQuestion: number,
    question: string,
    amount: number,
    answer: string,
    alternative1: string,
    alternative2: string,
    alternative3: string
}

export function TrainingHeroesContext() {
    const quest = questions;
    console.log(quest[1].idQuestion);
    return (
        <div>
            
        </div>
    );
}