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
    corrigir: (alternative: any) => void;
    next: number;
    // buildAllQuestions: (heroe: any) => void;
    setAlternative: any;
    experienceToNextLevel: number;
    currentExperience: number;
    activeCorrection: string;
}

export const QuestionsContext = createContext({} as QuestionsContextData);

interface QuestionsProviderProps {
    children: ReactNode;
}

export function QuestionsProvider({ children }: QuestionsProviderProps) {
    const [level, setLevel] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [next, setNext] = useState(0);
    const [alternative, setAlternative] = useState("");
    const [currentExperience, setExperience] = useState(0);
    const [activeCorrection, setActiveCorrection] = useState("Inicial");

    const experienceToNextLevel = Math.pow((level + 1) * 4,2);

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

    }

    function resetQuestion() {
        setActiveQuestion(null);
    }

    function corrigir(alternative) {
        let finalExperience = currentExperience;
        if(alternative === activeQuestion.answer){
            console.log(alternative);
            const {amount} = activeQuestion;

            finalExperience = currentExperience + amount;

            if(finalExperience >= experienceToNextLevel){
                finalExperience = finalExperience - experienceToNextLevel;
                levelUp();
            }
            setActiveCorrection("Certo");
            start();
        }else{
            setActiveCorrection("Errado");
            start();
        }

        setExperience(finalExperience);
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
                setAlternative,
                experienceToNextLevel,
                currentExperience,
                activeCorrection
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
}