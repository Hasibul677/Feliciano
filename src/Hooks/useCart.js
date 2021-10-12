import { useState } from 'react';

const useCart = () => {
    const [foods, setFoods] = useState([]);
    const addToOrder = food =>{
        setFoods([...foods, food]);
    }
  





    
    return {
    foods,
    addToOrder
    }
};

export default useCart;