import React from 'react';

import { data } from '../pages/restApi.json';

const Fooditem = ({ id, name, price }) => {
    // Find the corresponding item from the data array based on the id
    const foodItem = data[0].food_list.find(item => item.id === id);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={foodItem.image} alt={name} />
            </div>
           
                <p className="food-item-price">${foodItem.price}</p>
            </div>
        
    );
}

export default Fooditem;
