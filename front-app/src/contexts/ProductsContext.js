import React, { createContext, useState, useEffect, useContext } from 'react';
import Services from '../services/services';

const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await Services.getProducts();
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return ( 
    <ProductsContext.Provider value={{products}} >
      { children }
    </ProductsContext.Provider>
  );
}
 
export default ProductsContextProvider;

export function useProductContext() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}