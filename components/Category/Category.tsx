import styles from './Category.module.css'

interface Prop {
    optionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Category({optionChange}: Prop) {
    return (
        <div>
            <select className={styles.select} onChange={optionChange}>
                <option value="all">All Categories</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelry</option>
                <option value="electronics">Electronics</option>
            </select>
        </div>
    )
}