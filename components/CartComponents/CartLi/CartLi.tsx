import { Product } from '@/types/types'
import styles from './CartLi.module.css'

interface Prop {
    item: Product
}
export default function CartLi({ item }: Prop) {
    return (
        <li className={styles.cartLi}>
            <img src={item.image} />
            <div>
                <h4>{item.title}</h4>
                <span>${item.price.toFixed(2)}</span>
                <p>Count: {item.quantity}</p>
            </div>
            <button>Remove</button>
        </li>
    )
}