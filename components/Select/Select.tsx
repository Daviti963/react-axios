import { selectState } from "@/app/state";
import { useAtom } from "jotai";
import { useEffect } from "react";
import styles from './Select.module.css'
export default function Select() {

    const [select, setSelect] = useAtom(selectState);

    useEffect(() => {
        const saved = localStorage.getItem('select');
        if (saved) setSelect(saved);
    }, []);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelect(e.target.value);
        localStorage.setItem('select', e.target.value);
    }

    return (
        <select className={styles.select} value={select} onChange={handleSelect}>
            <option value='all'>all</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
        </select>
    )

}