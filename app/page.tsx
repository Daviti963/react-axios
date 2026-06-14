'use client'
import Image from "next/image";
import styles from './page.module.css'
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Select from "@/components/Select/Select";
import Filter from "@/components/Filter/Filter";
export default function Home() {

  return (

    <main className={styles.main}>
      <div>
        <Select />
        <Filter />
      </div>

      <ProductGrid />
    </main>

  );
}