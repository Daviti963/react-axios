import { useEffect, useState } from "react"
import axios from "axios";
import { Product } from "@/types/types";
import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard"
import { selectState, filterState } from "@/app/state";
import { useAtom } from "jotai";


export default function ProductGrid() {

    const [products, setProducts] = useState<Product[]>([]);
    const [select] = useAtom(selectState);
    const [filter] = useAtom(filterState);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(result => {
                setProducts(result.data)
            })
    }, [])


    const selectedProducts = products
        .filter(item => select === 'all' || item.category === select)
        .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={styles.ul}>
            {selectedProducts.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </ul>
    )
}