'use client'
import Image from "next/image";
import styles from './page.module.css'
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Select from "@/components/Select/Select";
import Filter from "@/components/Filter/Filter";
import ViewAll from "@/components/ViewAll/ViewAll";
export default function Home() {

  return (

    <main className={styles.main}>
      <ViewAll />
      
      <div>
        <Select />
        <Filter />
      </div>

      <ProductGrid />
    </main>

  );
}