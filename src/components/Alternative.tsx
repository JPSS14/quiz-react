import { useState, useContext, useEffect } from "react";
import { QuestionsContext } from '../contexts/QuestionContext';
import heroeStyle from '../styles/Heroe.module.css';

export function Alternative({ alternatives, activeAlternative1, activeAlternative2, activeAlternative3, activeAlternative4}) {
    const { isActive, muda } = useContext(QuestionsContext);

    const [alternative, setAlternative] = useState("");

    function questao(){
        muda(alternative);
    }

    useEffect(() => {
        questao();
    }, [alternative])

    return (
        <div>
            {isActive ? (
                <>
                    <div>
                        <input type="radio" id="a1" checked={alternative === activeAlternative1} value={activeAlternative1} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor="a1">{activeAlternative1}</label>
                    </div>
                    <div>
                        <input type="radio" id="a2" checked={alternative === activeAlternative2} value={activeAlternative2} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor="a2">{activeAlternative2}</label>
                    </div>
                    <div>
                        <input type="radio" id="a3" checked={alternative === activeAlternative3} value={activeAlternative3} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor="a3">{activeAlternative3}</label>
                    </div>
                    <div>
                        <input type="radio" id="a4" checked={alternative === activeAlternative4} value={activeAlternative4} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor="a4">{activeAlternative4}</label>
                    </div>
                </>
            ) : (
                <div className={heroeStyle.mainQuestion}>

                </div>
            )}
            <div>
                {/* <input type="radio" id="a1" checked={alternative === activeAlternative1} value={activeAlternative1} onChange={(e) => { setAlternative(e.target.value) }}></input>
                <label htmlFor="a1">{activeAlternative1}</label> */}
            </div>
        </div>
    );
}