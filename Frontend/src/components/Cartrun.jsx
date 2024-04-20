import React from 'react';
import { data } from "../pages/restApi.json";
import './menu.css';
import Itemcard from './Itemcard'; 

const Menu = () => {
  return (
    <>
      <h1 className='text-center mt-3'>All items</h1>
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
      </section>
    </>
  );
};

export default Menu;
