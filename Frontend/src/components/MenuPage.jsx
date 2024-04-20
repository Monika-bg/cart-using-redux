import React from 'react';
import Cartrun from './Cartrun';
import { CartProvider } from 'react-use-cart';
import AddItem from './AddItem';

function MenuPage(){
    return(
        <>
        <CartProvider>
        <Cartrun/>
        <AddItem/>
        </CartProvider>
        </>
    )
}
export default MenuPage;