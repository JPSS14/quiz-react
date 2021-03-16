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
    startNewQuestion: () => void;
}

export const QuestionsContext = createContext({} as QuestionsContextData);

interface QuestionsProviderProps {
    children: ReactNode;
}

export function QuestionsProvider({ children }: QuestionsProviderProps) {
    const [level, setLevel] = useState(3);
    const [activeQuestion, setActiveQuestion] = useState(null);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewQuestion(){
        const randomQuestionIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomQuestionIndex];

        setActiveQuestion(question);
    }

    return (
        <QuestionsContext.Provider
            value={{
                level,
                levelUp,
                activeQuestion,
                startNewQuestion
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
}