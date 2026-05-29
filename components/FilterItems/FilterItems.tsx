import styles from './FilterItems.module.css'

interface Prop {
    optionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FilterItems({optionChange}: Prop) {
    return (
        <div>
            <select className={styles.select} onChange={optionChange}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
        </div>
    )
}