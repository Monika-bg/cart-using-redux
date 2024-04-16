import React, { useState } from 'react';
import "./menu.css";
import { data } from "../pages/restApi.json";
import Cart from './cart'; // Import the Cart component

const MenuPage = () => {
    return (
        <section className='menu-page'>
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">Explore our menu</h1>
                    <p className='explore-menu-text'>Choose the best menu</p>
                </div>
                <div className='menu-sections'>
                    <div className='menu-section'>
                        <h2 className='menu-section-title'>MENU LIST</h2>
                        <div className='explore-menu-list'>
                            {data[0].menu_list.map(element => (
                                <div key={element.id} className='explore-menu-list-item'>
                                    <img src={element.image} alt="" />
                                    <p>{element.title}</p>
                                    <p>{element.id}</p> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='menu-sections'>
                    <div className='menu-section'>
                        <h2 className='menu-section-title'>POPULAR DISHES</h2>
                        <div className="dishes_container">
                            {data[0].dishes.map(element => (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Render the Cart component */}
            <Cart />
        </section>
    );
}

export default MenuPage;
