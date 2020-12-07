import React from 'react';
import ProductItem from '../components/ProductItem'
import { useProductContext } from '../../../contexts/ProductsContext'

const Products = () => {
  const { products } = useProductContext();

  return (
    <div className="product-container">
      {
        products.map(product => (
            <ProductItem key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Products;