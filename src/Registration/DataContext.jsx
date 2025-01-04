import React, { createContext, useContext, useState } from 'react';

// Create a Context for product data
const DataContext = createContext();

// Provider to wrap around the components that need access to shared data
export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState({
    women: [],
    men: [],
    kids: [],
  });

  // Add product to specific gender category
  const addProduct = (category, product) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [category]: [...prevProducts[category], product],
    }));
  };

  return (
    <DataContext.Provider value={{ products, addProduct }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access data context
export const useDataContext = () => useContext(DataContext);
