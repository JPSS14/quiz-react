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
    resetCorrection: () => void;
    isActive: boolean;
    start: () => void;
    // allQuestions: any;
    corrigir: () => void;
    corrigirTreino: () => void;
    // buildAllQuestions: (heroe: any) => void;
    setAlternative: any;
    experienceToNextLevel: number;
    currentExperience: number;
    activeCorrection: string;
    muda: (alternative: any) => void;
    option: number;
}

export const QuestionsContext = createContext({} as QuestionsContextData);

interface QuestionsProviderProps {
    children: ReactNode;
}

export function QuestionsProvider({ children }: QuestionsProviderProps) {
    const [level, setLevel] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [option, setOption] = useState(0);
    const [alternative, setAlternative] = useState("");
    const [currentExperience, setExperience] = useState(0);
    const [activeCorrection, setActiveCorrection] = useState("Inicial");

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    // let allQuestion = [];

    function start() {
        if (isActive === true) {
            setIsActive(false);
        } else {
            setIsActive(true);
            setActiveCorrection("Initial");
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
        setOption(Math.floor(Math.random() * (5 - 1) + 1));
    }

    function resetCorrection() {
        setActiveCorrection("Inicial");
    }

    function corrigir() {
        let finalExperience = currentExperience;
        if (alternative === activeQuestion.answer) {
            console.log(alternative);
            const { amount } = activeQuestion;

            finalExperience = currentExperience + amount;

            if (finalExperience >= experienceToNextLevel) {
                finalExperience = finalExperience - experienceToNextLevel;
                levelUp();
            }
            setActiveCorrection("Certo");
            start();
        } else {
            setActiveCorrection("Errado");
            start();
        }

        setExperience(finalExperience);
    }

    function corrigirTreino() {
        if (alternative === activeQuestion.answer) {
            console.log(alternative);
            setActiveCorrection("Certo");
            start();
        } else {
            setActiveCorrection("Errado");
            start();
        }
    }

    function muda(alternative){
        setAlternative(alternative);
        console.log(alternative);
    }

    return (
        <QuestionsContext.Provider
            value={{
                level,
                levelUp,
                activeQuestion,
                startNewQuestion,
                resetCorrection,
                isActive,
                start,
                // allQuestions,
                corrigir,
                corrigirTreino,
                // buildAllQuestions,
                setAlternative,
                experienceToNextLevel,
                currentExperience,
                activeCorrection,
                muda,
                option
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
}