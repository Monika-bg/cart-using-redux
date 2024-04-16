import React, { useState } from 'react';
import "./menu.css";
import { data } from "../pages/restApi.json";
// Import the Cart component

const MenuPage = () => {
    const [itemCount, setItemCount] = useState(0);
    return (
        <>
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
                                        <p>id:{element.id}</p>
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
                                        {!itemCount ? (
                                            <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={'./plus.jpg'} alt="no image" />
                                        ) : (
                                            <div className='food-item-counter'>
                                                <img onClick={() => setItemCount(prev => prev - 1)} src={'./minus.jpg'} alt="--" />
                                                <p>{itemCount}</p>
                                                <img onClick={() => setItemCount(prev => prev + 1)} src={'./plus.jpg'} alt="++" />
                                            </div>
                                        )}
                                        <h3>{element.title}</h3>
                                        <button>{element.category}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='menu-sections'>
                        <div className='menu-section'>
                            <h2 className='menu-section-title'>BREAKFAST</h2>
                            <div className="breakfast">
                                {data[0].food_list.map(element => (
                                    <div className="card" key={element.id}>
                                        <img src={element.image} alt={element.title} />
                                        <h3>{element.title}</h3>
                                        <p>Price: ${element.price}</p> {/* Display price */}
                                        <button>{element.category}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Render the Cart component */}
            </section>
        </>
    );
}

export default MenuPage;
