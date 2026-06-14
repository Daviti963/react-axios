import { useAtom } from "jotai"
import { filterState } from "@/app/state"
import React from "react";
import styles from './Filter.module.css'

export default function Filter() {

    const [filter, setFilter] = useAtom(filterState);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilter(e.target.value);
    }

    return (
        <input className={styles.input} placeholder="Filter product" type="text" value={filter} onChange={handleFilter} />
    )
}