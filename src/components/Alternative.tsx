import { useState, useContext, useEffect } from "react";
import { QuestionsContext } from '../contexts/QuestionsContext';
import heroeStyle from '../styles/Heroe.module.css';

export function Alternative({ activeAlternative1, activeAlternative2, activeAlternative3, activeAlternative4 }) {
    const { isActive, muda } = useContext(QuestionsContext);

    const [alternative, setAlternative] = useState("");

    function questao() {
        muda(alternative);
    }

    useEffect(() => {
        questao();
    }, [alternative])

    return (
        <div className={heroeStyle.mainQuestion}>
            {isActive ? (
                <>
                    <div>
                        <input type="radio" id={activeAlternative1} checked={alternative === activeAlternative1} value={activeAlternative1} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor={activeAlternative1}>{activeAlternative1}</label>
                    </div>
                    <div>
                        <input type="radio" id={activeAlternative2} checked={alternative === activeAlternative2} value={activeAlternative2} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor={activeAlternative2}>{activeAlternative2}</label>
                    </div>
                    <div>
                        <input type="radio" id={activeAlternative3} checked={alternative === activeAlternative3} value={activeAlternative3} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor={activeAlternative3}>{activeAlternative3}</label>
                    </div>
                    <div>
                        <input type="radio" id={activeAlternative4} checked={alternative === activeAlternative4} value={activeAlternative4} onChange={(e) => { setAlternative(e.target.value) }}></input>
                        <label htmlFor={activeAlternative4}>{activeAlternative4}</label>
                    </div>
                </>
            ) : (
                <div className={heroeStyle.mainQuestion}>

                </div>
            )}
        </div>
    );
}