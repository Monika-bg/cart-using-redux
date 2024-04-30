import React from 'react';
import { data } from "../pages/restApi.json";
import { useCart } from 'react-use-cart'; // Import useCart hook
import './menu.css';
import Itemcard from './Itemcard'; 
import AddItem from './AddItem';
import Video from './Video';

const Menu = () => {
  const { totalItems } = useCart(); // Get the total number of items in the cart

  if (!data || data.length === 0 || !data[0].food_list) {
    return <div>Loading...</div>; // Handle loading state or empty data
  }

  const breakfastItems = data[0].food_list.filter(item => item.category === 'Breakfast');
  const lunchItems = data[0].food_list.filter(item => item.category === 'Lunch');
  const dinnerItems = data[0].food_list.filter(item => item.category === 'Dinner');

  return (
    <>
      <div className="header">
        <Video/>
        <h1 className='text-center mt-3'>BREAKFAST</h1>
        <div className="cart-icon">
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {breakfastItems.map(element => (
            <Itemcard
              key={element.id}
              img={element.image}
              title={element.name}
              desc={`Price: $${element.price}`}
              item={element}
            />
          ))}
        </div>
        <AddItem/>
      </section>
      <div className="header">
        <h1 className='text-center mt-3'>LUNCH</h1>
        <div className="cart-icon">
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {lunchItems.map(element => (
            <Itemcard
              key={element.id}
              img={element.image}
              title={element.name}
              desc={`Price: $${element.price}`}
              item={element}
            />
          ))}
        </div>
      </section>
      <div className="header">
        <h1 className='text-center mt-3'>DINNER</h1>
        <div className="cart-icon">
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {dinnerItems.map(element => (
            <Itemcard
              key={element.id}
              img={element.image}
              title={element.name}
              desc={`Price: $${element.price}`}
              item={element}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
