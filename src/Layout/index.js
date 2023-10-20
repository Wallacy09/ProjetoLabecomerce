/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
const Default = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    
  useEffect(() => {
    if(cart.length > 0){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart]);


    return (
        <>     
            <Header cart={cart} setCart={setCart} />
            <Main cart={cart} setCart={setCart} />
        </>
    )
}

export default Default;