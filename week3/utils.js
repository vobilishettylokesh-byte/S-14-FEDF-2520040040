export const addItem = (data, item) => [...data, item]; 
export const filterItems = (data, key) => 
data.filter(d => d.name.toLowerCase().includes(key.toLowerCase())); 
counter.js 
export const createCounter = () => { 
let count = 0; 
return () => ++count; 
};