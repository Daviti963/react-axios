import { useEffect, useState } from "react"
import axios from "axios";
import { Product } from "@/types/types";
import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard"
import { selectState, filterState, productState, cartCountState } from "@/app/state";
import { useAtom } from "jotai";


export default function ProductGrid() {

    const [products, setProducts] = useState<Product[]>([]);
    const [select] = useAtom(selectState);
    const [filter] = useAtom(filterState);
    const [green, setGreen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [cart, setCart] = useAtom(productState);
    const [count, setCount] = useAtom(cartCountState);



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
    const isExist = cart.find(cartItem => cartItem.id === item.id);
    
    const cartItem = cart.find(c => c.id === item.id);
    const currentStock = item.rating.count - (cartItem?.quantity || 0);
    if (currentStock <= 0) return; 

    if (isExist) {
        setCart(cart.map(
            cartItem => cartItem.id === item.id ?
                { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 } : cartItem
        ))
    } else {
        setCart([...cart, { ...item, quantity: 1 }])
    }
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