import { styled } from "styled-components";
import { useState } from "react";

export const Burguer = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    width: 100%;
    height: 4px;
    border-radius: 8px;
    background-color: white;
    transition: all ease-in-out 300ms;
  }

  &.active {
    span {
      position: absolute;
      top: 50%;
      transform: translate(-50%);

      &:first-child {
        transform: rotate(45deg);
      }

      &:last-child {
        transform: rotate(-45deg);
      }

      &:nth-child(2) {
        visibility: hidden;
        opacity: 0;
        width: 0;
      }
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ContainerBurguer = styled.div`
  width: 15%;
  position: absolute;
  top: 15vh;
  left: 0;
  height: 0;
  border-bottom-right-radius: 8px;
  background: linear-gradient(199deg, #980098, #d5b400 );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 20px 0;
  transition: all ease-in-out 400ms;
  visibility: hidden;
  opacity: 0;

  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      font-size: 1.3rem;
      font-weight: 700;
      color: white;
      transition: all ease 200ms;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 10px;

      &:hover {
        color: black;
      }
    }
  }

  .botao {
    width: fit-content;
    display: flex;
    gap: 20px;
    justify-content: space-around;
    

    & button {
      width: 100px;
      height: 40px;
      border-radius: 8px;
      border: 2px solid black;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      transition: all ease 100ms;
      color: black;
      font-size: 14px;
      font-weight: bold;

      &:hover {
        background-color: black;
        color: white;
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }

  &.active {
    visibility: visible;
    opacity: 1;
    height: 400px;
  }

  @media only screen and (max-width: 480px) {
    width: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ul {
      width: 100%;
      gap: 100px;
      text-align: center;
    }
    &.active {
      width: 100%;
      height: calc(100vh - 15vh);
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    width: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ul {
      width: 100%;
      gap: 100px;
      text-align: center;
    }

      &.active{
        width: 40%;
        height: calc(100vh - 15vh);
      }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px){
    width: 0;
      &.active{
        width: 40%;
        height: calc(100vh - 15vh);
        
      }
  }

  @media only screen and (min-width: 1024px){
    width: 0;
      &.active{
        width: 20%;
        height: 50vh;        
      }
  }
`;

const Hamburguer = () => {
  const [abreBurguer, setAbreBurguer] = useState(false);

  return (
    <>
      <Burguer
        className={abreBurguer && "active"}
        onClick={() => setAbreBurguer(!abreBurguer)}
      >
        <span></span>
        <span></span>
        <span></span>
      </Burguer>

      <ContainerBurguer className={abreBurguer && "active"}>
        <ul>
          <li>
            <a href={"#!"}>Inicio</a>
          </li>

          <li>
            <a href={"#!"}>Contato</a>
          </li>

          <li>
            <a href={"#!"}>Produtos</a>
          </li>

          <li>
            <a href={"#!"}>Minha Nave</a>
          </li>
        </ul>

        <div className="botao">
          <button>Login</button>
          <button>Cadastre-se</button>
        </div>
      </ContainerBurguer>
    </>
  );
};

export default Hamburguer;
