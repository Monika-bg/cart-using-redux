import React from 'react';
import { data } from "../pages/restApi.json";
import { useCart } from 'react-use-cart'; // Import useCart hook
import './menu.css';
import Itemcard from './Itemcard'; 
import AddItem from './AddItem';


const Menu = () => {
  const { totalItems } = useCart(); // Get the total number of items in the cart

  return (
    <>
      <div className="header">
        <h1 className='text-center mt-3'>BREAKFAST</h1>
        <div className="cart-icon">
          
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {data[0].food_list.map(element => (
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
          {data[0].food_list.map(element => (
            <Itemcard
              key={element.id}
              img={element.image}
              title={element.name}
              desc={`Price: $${element.price}`}
              item={element}
            />
          ))}
        </div>
        <div className="header">
        <h1 className='text-center mt-3'>DINNER</h1>
        <div className="cart-icon">
          
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {data[0].food_list.map(element => (
            <Itemcard
              key={element.id}
              img={element.image}
              title={element.name}
              desc={`Price: $${element.price}`}
              item={element}
            />
          ))}
        </div>
    </>
  );
};

export default Menu;
