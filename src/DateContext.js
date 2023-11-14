// DateContext.js
import React, { createContext, useState, useContext } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [postDate, setPostDate] = useState(null);

  const setPostDateHandler = () => {
    const currentDate = new Date().toLocaleDateString();
    setPostDate(currentDate);
  };

  return (
    <DateContext.Provider value={{ postDate, setPostDate: setPostDateHandler }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
