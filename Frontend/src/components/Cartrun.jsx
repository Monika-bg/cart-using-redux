import React, { useState, useEffect } from 'react';
import { data } from "../pages/restApi.json";
import './menu.css';
import Itemcard from './Itemcard'; 
import Video from './Video'; // Assuming Video is your video component

const Menu = () => {
  const [showArrow, setShowArrow] = useState(true); // State to control the visibility of the arrow button

  // Function to handle scrolling to the about section
  const handleScrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust this value as needed
      behavior: 'smooth', // for smooth scrolling effect
    });
  };

  // Function to check scroll position and toggle arrow visibility
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const shouldShow = scrollPosition < windowHeight / 2;
    setShowArrow(shouldShow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="menu-page">
      <Video /> {/* Add the Video component here */}
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
      {/* Add scrolling arrow button */}
      {showArrow && (
        <div className="scroll-down-btn" onClick={handleScrollToAbout}>
        <i className="fas fa-chevron-down" style={{ color: 'white' }}></i>
      </div>
      
      )}
    </div>
  );
};

export default Menu;
