import { useRouter } from 'next/router';
import styles from '../../styles/main.module.css';
import heroeStyle from '../../styles/Heroe.module.css';
import questions from '../../../questions.json';
import { useEffect, useState } from 'react';

export default function Heroe() {
    const router = useRouter();

    const [heroeList, setHeroeList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = questions;
            setHeroeList(list);
        }

        loadAll();
    }, []);

    const lis = questions;

    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Responda</h1>
            </div>
            <div className={heroeStyle.mainContainer}>
                <div className={heroeStyle.mainQuestion}>
                    <p>Qual o nome da primeira armadura do Homem de Ferro?</p>
                    <input type="radio" name="alternativa" id="a1" value="Marq-1"></input>
                    <label htmlFor="a1">Marq-1</label>
                    <input type="radio" name="alternativa" id="a2" value="Machine-1"></input>
                    <label htmlFor="a2">Machine-1</label>
                    <input type="radio" name="alternativa" id="a3" value="Mark-1"></input>
                    <label htmlFor="a3">Mark-1</label>
                    <input type="radio" name="alternativa" id="a4" value="Armor-1"></input>
                    <label htmlFor="a4">Armor-1</label>
                </div>
                <div className={heroeStyle.background}>
                    <img src={`/${router.query.heroe}-back-3.jpg`} alt={`${router.query.heroe}`} />
                </div>
            </div>
        </main>
    );
}