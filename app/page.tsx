'use client'
import axios from 'axios';
import Image from "next/image";
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { Product } from '@/types/types';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import FilterItems from '@/components/FilterItems/FilterItems';
import Input from '@/components/Input/Input';
import Category from '@/components/Category/Category';

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState<string>('asc');
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string>('all');


  const filteredProducts = products
    .filter(item => item.title.toLowerCase().includes(text.toLocaleLowerCase()))
    .filter(item => category === 'all' || item.category === category);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?sort=${sort}`)
      .then((result) => {
        setProducts(result.data);
      })
  }, [sort]);






  const optionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    
  };

  


  const onClick = (item: Product) => {
    const currentCount: number = item.rating?.count || 0;
    if (currentCount <= 1) {
      setProducts(products.filter(product => product.id !== item.id));
    } else {
      setProducts(products.map(product =>
        product.id === item.id
          ? { ...product, rating: { ...product.rating, count: currentCount - 1 } } : product
      ));
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div>
            <FilterItems optionChange={optionChange} />
            <Input text={text} onChange={onChange} />
            <Category optionChange={categoryChange} />
          </div>
          <ProductGrid onButtonClick={onClick} product={filteredProducts} />
        </div>
      </div>
    </main>

  );
}
