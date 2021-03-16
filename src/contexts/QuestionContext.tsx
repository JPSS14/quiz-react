import { createContext, ReactNode, useState } from 'react';
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

interface QuestionsContextData {
    level: number;
    levelUp: () => void;
    activeQuestion: Questions;
    startNewQuestion: (heroe:any) => void;
    resetQuestion: () => void;
    isActive: boolean;
    start: () => void;
}

export const QuestionsContext = createContext({} as QuestionsContextData);

interface QuestionsProviderProps {
    children: ReactNode;
}

export function QuestionsProvider({ children }: QuestionsProviderProps) {
    const [level, setLevel] = useState(37);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [isActive, setIsActive] = useState(false);

    function start(){
        if(isActive === true){
            setIsActive(false);
        }else{
            setIsActive(true);
        }
    }

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewQuestion(heroe){
        const randomQuestionIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomQuestionIndex];
        console.log("startNewQuestion = ",heroe);
        setActiveQuestion(question);
    }

    function resetQuestion(){
        setActiveQuestion(null);
    }

    return (
        <QuestionsContext.Provider
            value={{
                level,
                levelUp,
                activeQuestion,
                startNewQuestion,
                resetQuestion,
                isActive,
                start
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
}