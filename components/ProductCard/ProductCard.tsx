import { Product } from "@/types/types"
import styles from './ProductCard.module.css'

interface Prop {
    item: Product;
    onButtonClick: (item: Product) => void;
}

export default function ProductCard({ item, onButtonClick }: Prop) {
    return (
        <li className={styles.card}>
            <img src={item.image} alt={item.title} />
            <div className={styles.info}>
                <h4>{item.title}</h4>
                <span className={styles.category}>Category: <p>{item.category}</p></span>
                <p className={styles.description}>{item.description}</p>
                <span className={styles.price}>Price: ${item.price}</span>
                <span className={styles.rate}>Rate: {item.rating?.rate}</span>
                <span className={styles.count}>Count: {item.rating?.count}</span>
                <button onClick={() => onButtonClick(item)} className={styles.button}>Remove</button>
            </div>
        </li>
    )
} 