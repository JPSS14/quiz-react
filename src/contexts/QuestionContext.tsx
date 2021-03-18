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
    startNewQuestion: (heroe: any) => void;
    resetQuestion: () => void;
    isActive: boolean;
    start: () => void;
    // allQuestions: any;
    corrigir: any;
    next: number;
    // buildAllQuestions: (heroe: any) => void;
    desistir: () => void;
}

export const QuestionsContext = createContext({} as QuestionsContextData);

interface QuestionsProviderProps {
    children: ReactNode;
}

export function QuestionsProvider({ children }: QuestionsProviderProps) {
    const [level, setLevel] = useState(3);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [next, setNext] = useState(0);


    let allQuestion = [];

    function start() {
        if (isActive === true) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }

    function levelUp() {
        setLevel(level + 1);
    }

    function mixerQuestions(array: any) {
        var actualIndex = array.length, tempValue: any, randomIndex: any;

        while (0 !== actualIndex) {

            randomIndex = Math.floor(Math.random() * actualIndex);
            actualIndex -= 1;

            tempValue = array[actualIndex];
            array[actualIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }

        return array;
    }

    // function buildAllQuestions(heroe) {
    //     const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    //     setAllQuestions(mixerQuestions(questions.filter(heroes => heroes.heroe === heroe)).slice(0, 2));
    //     allQuestion = mixerQuestions(questions.filter(heroes => heroes.heroe === heroe)).slice(0, 2);
    //     // mixerQuestions(allQuestions);
    //     console.log("build this -> ", allQuestion);
    //     setActiveHeroe(heroe);
    //     // setActiveQuestion(allQuestion[next]);

    //     const question = questions[randomQuestionIndex];
    //     setActiveQuestion(question);

       

    //     startNewQuestion();
    // }

    function startNewQuestion(heroe) {
        setActiveQuestion(mixerQuestions(questions.filter(heroes => heroes.heroe === heroe))[0]);
 
    }

    function resetQuestion() {
        setActiveQuestion(null);
    }

    function corrigir() {
        setNext(next + 1);
    }

    function desistir() {
        setNext(0);
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
                start,
                // allQuestions,
                corrigir,
                next,
                // buildAllQuestions,
                desistir
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
}