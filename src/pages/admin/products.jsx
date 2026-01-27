import React, { useEffect, useState } from 'react'
import { productsServices } from '@/lib/services/productsServices'

export const ProductsAdminPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsServices.getAllProducts().then(data => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div>Products</div>
  )
}
