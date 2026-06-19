import { Product } from "@/types/types"
import styles from './ProductCard.module.css'
import { useAtom } from "jotai";
import { productState } from "@/app/state";

interface Prop {
    item: Product
    onButtonClick: (item: Product) => void;
}
export default function ProductCard({ item, onButtonClick }: Prop) {


    const [cart] = useAtom(productState);
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    const currentStock = item.rating.count - (cartItem?.quantity || 0);

    return (
        <li className={styles.li}>
            <div>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <span className={styles.category}>${item.category}</span>
                <span className={styles.price}><p>Price:</p> ${item.price.toFixed(2)}</span>
                <p>Count: {currentStock}</p>
                <p>{item.description}</p>
                <button disabled={item.rating.count === 0} onClick={() => onButtonClick(item)}>Add To Cart</button>
            </div>
        </li>
    )
}