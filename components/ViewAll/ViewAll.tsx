import styles from './ViewAll.module.css'
import Link from "next/link";
import { cartCountState } from '@/app/state';
import { useAtom } from "jotai";

export default function ViewAll() {

    const [count] = useAtom(cartCountState);

    return (
        <Link className={styles.link} href='/Cart' >Cart 🛒{
            count > 0 ? <span className={styles.span}>{count}</span> : ''
        }</Link>
    )
}