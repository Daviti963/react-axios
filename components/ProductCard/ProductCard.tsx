import { Product } from "@/types/types"
import styles from './ProductCard.module.css'

interface Prop {
    item: Product
    onButtonClick: (item: Product) => void;
}
export default function ProductCard({ item, onButtonClick }: Prop) {
    return (
        <li className={styles.li}>
            <div>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <span className={styles.category}>${item.category}</span>
                <span className={styles.price}><p>Price:</p> ${item.price.toFixed(2)}</span>
                <p>Count: {item.rating.count}</p>
                <p>{item.description}</p>
                <button disabled={item.rating.count === 0} onClick={() => onButtonClick(item)}>Add To Card</button>
            </div>
        </li>
    )
}