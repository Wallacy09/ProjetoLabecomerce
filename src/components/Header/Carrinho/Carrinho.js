import { styled } from "styled-components";
import ImgCarro from "../../../assets-img/Logo/foguete-compras.jpg";
import CardProduct from "./Cardproduct/CardProduct";
import { useState } from "react";

export const Car = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  &:active {
    transform: scale(0.97);
  }

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: black;
    left: -10px;
    top: -5px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 200ms;
  }
`;

export const ContainerCarrinho = styled.div`
  width: 20%;
  position: absolute;
  top: 15vh;
  right: 0;
  height: 0px;
  border-bottom-left-radius: 8px;
  background-color: #30103075;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  opacity: 0;
  transition: all ease-in-out 400ms;

  & button {
    visibility: hidden;
    opacity: 0;
  }

  ul {
    width: 100%;
    max-height: 85%;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;

    li {
      width: 90%;
      border-radius: 8px;
      border: 1px solid black;
      box-shadow: -1px 0px 20px 3px rgba(0, 0, 0, 0.72);
      -webkit-box-shadow: -1px 0px 20px 3px rgba(0, 0, 0, 0.72);
      -moz-box-shadow: -1px 0px 20px 3px rgba(0, 0, 0, 0.72);
      cursor: pointer;

      &:active {
        transform: scale(0.97);
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: gray;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #f1f1f1f1;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  &.active {
    visibility: visible;
    opacity: 1;
    height: 400px;

    & button {
      visibility: visible;
      opacity: 1;
      width: 80%;
      position: absolute;
      bottom: 25px;
      height: 40px;
      border: 1px solid black;
      background-color: transparent;
      border-radius: 8px;
      cursor: pointer;
      color: white;
      font-weight: 700;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    width: 100%;

    &.active {
      height: calc(100vh - 15vh);
    }

    & button {
      bottom: 25px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 60%;
    &.active {
      visibility: visible;
      opacity: 1;
      height: 70vh;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 45%;

    &.active {
      height: 70vh;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 30%;

    &.active {
      visibility: visible;
      opacity: 1;
      height: 70vh;
    }
  }
`;

const Carrinho = ({ cart, setCart }) => {
  const [abreCarro, setAbreCarro] = useState(false);
  

  const abreCarrinho = () => {
    setAbreCarro(!abreCarro);
  };


  const totalCart = cart.reduce((acumulador, item) => (item.preco * item.amount) + acumulador, 0);
  console.log(cart);

  let lista = cart.map((item) => (
    <li key={item.id}>
      <CardProduct
        titulo={item.titulo}
        image={item.image}
        description={item.descricao}
        price={item.preco}
        quantidade={item.amount}
        setCart={setCart}
        cart={cart}
        id={item.id}
        amount={item.amount}
      />
    </li>
  ));
  return (
    <>
      <Car onClick={abreCarrinho}>
        <img src={ImgCarro} alt="IMG Carro" />
        {cart.length > 0 ? <span>{cart.length}</span> : ""}
      </Car>

      <ContainerCarrinho className={abreCarro && "active"}>
        <ul>{lista}</ul> 
        <h4>Total: {totalCart}</h4>
        <button>Prosseguir para a compra</button>
      </ContainerCarrinho>
    </>
  );
};

export default Carrinho;
