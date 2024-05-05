import React from "react";
import Navbar from "./Navbarr";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItem";
import Cart from "./Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />  
    </>
  );
};

export default Home;