import React from "react";
// localStorage.setItem('TODOS_V1', JSON.stringify(list))
// localStorage.removeItem('TODOS_V1', list)
export function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }