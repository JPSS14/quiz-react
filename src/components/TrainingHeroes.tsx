import heroes from '../../heroes.json';
import { useEffect, useState } from 'react';
import styles from '../styles/TrainingHeroes.module.css';
import Selection from '../components/Selection';



export function TrainingHeroes() {

    const [heroeList, setHeroeList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = heroes;
            setHeroeList(list);
        }

        loadAll();
    }, []);

    return (
        <section className={styles.mainSection}>
            {heroeList.map((item, key) => (
                <Selection key={key} heroe={item.heroe} imgSelect={item.imgSelect} route={item.route} />
            ))}
        </section>

    );
}