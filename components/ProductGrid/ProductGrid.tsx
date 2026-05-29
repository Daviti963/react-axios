import { Product } from "@/types/types"
import ProductCard from "../ProductCard/ProductCard"
import styles from './ProductGrid.module.css'

export default function ProductGrid({product, onButtonClick}: {product: Product[], onButtonClick: (item: Product) => void}) {
    return (
        <ul className={styles.grid}>
            {product.map(item => (
                <ProductCard key={item.id} item={item} onButtonClick={onButtonClick}/>
            ))}
        </ul>
    )
}