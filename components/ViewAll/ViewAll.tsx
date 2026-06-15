import styles from './ViewAll.module.css'
import Link from "next/link";

export default function ViewAll() {
    return (
        <Link className={styles.link} href='/Cart' >Cart 🛒</Link>
    )
}