/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
const Default = () => {
    localStorage.getItem('cart') !== null ? "" : localStorage.setItem('cart', JSON.stringify([]));
    const [cart, setCart] = useState([]);
    
  useEffect(() => {
    if(cart.length > 0){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart]);

  useEffect(() => {
    const local = localStorage.getItem('cart');
    setCart(JSON.parse(local));
  }, []);

    return (
        <>     
            <Header cart={cart} setCart={setCart} />
            <Main cart={cart} setCart={setCart} />
        </>
    )
}

export default Default;