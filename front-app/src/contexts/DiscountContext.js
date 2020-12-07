import React, { createContext, useState, useEffect, useContext } from 'react';
import Services from '../services/services';

const DiscountContext = createContext()

const DiscountContextProvider = ({children}) => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    const fetchDiscounts = async () => {
      const result = await Services.getDiscounts();
      setDiscounts(result);
    };

    fetchDiscounts();
  }, []);

  return ( 
    <DiscountContext.Provider value={{discounts}} >
      { children }
    </DiscountContext.Provider>
  );
}
 
export default DiscountContextProvider;

export function useDiscountContext() {
  const context = useContext(DiscountContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}