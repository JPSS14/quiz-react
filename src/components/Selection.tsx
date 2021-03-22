import heroes from '../../heroes.json';
import { useEffect, useState } from 'react';
import styles from '../styles/TrainingHeroes.module.css';
import SelectHeroes from './SelectHeroes';



export function Selection({pathname}) {

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
                <SelectHeroes key={key} heroe={item.heroe} imgSelect={item.imgSelect} route={item.route} pathname={pathname}/>
            ))}
        </section>

    );
}