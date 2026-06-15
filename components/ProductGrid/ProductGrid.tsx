import { useEffect, useState } from "react"
import axios from "axios";
import { Product } from "@/types/types";
import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard"
import { selectState, filterState, productState } from "@/app/state";
import { useAtom } from "jotai";


export default function ProductGrid() {

    const [products, setProducts] = useState<Product[]>([]);
    const [select] = useAtom(selectState);
    const [filter] = useAtom(filterState);
    const [green, setGreen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [cart, setCart] = useAtom(productState);



    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(result => {
                setProducts(result.data)
                setGreen(true)
            })
    }, [])

    useEffect(() => {
        if (green) {
            setSelectedProducts(
                products
                    .filter(item => select === 'all' || item.category === select)
                    .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
            )
        }
    }, [select, filter, green, products])


    const onButtonClick = (item: Product) => {
        const currentCount: number = item.rating?.count || 0;

        if (currentCount === 0) return;

        setCart([...cart, item]);
        setProducts(products.map(product =>
            product.id === item.id
                ? { ...product, rating: { ...product.rating, count: currentCount - 1 } } : product
        ))
    }



    return (
        <ul className={styles.ul}>
            {green ? selectedProducts.map(item => (
                <ProductCard key={item.id} item={item} onButtonClick={onButtonClick} />
            ))
                :
                <h1>Loading...</h1>
            }
        </ul>
    )
}