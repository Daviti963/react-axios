import CartLi from "../CartLi/CartLi"
import { productState} from "@/app/state"
import { useAtom } from "jotai"
import styles from './CartUl.module.css'


export default function CartUl() {

    const [products] = useAtom(productState);
    
    return (
        <ul className={styles.ul}>
            {products.map(item => (
                <CartLi key={item.id} item={item} />
            ))}
        </ul>
    )
}