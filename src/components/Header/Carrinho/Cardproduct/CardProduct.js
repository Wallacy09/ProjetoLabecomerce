import { styled } from "styled-components";
import img from '../../../../assets-img/Logo/delete.png';
import { useState } from "react";

export const Product = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-around;
    background-color: white;
    padding: 10px;
    border-radius: 8px;

      .imagemProduto{
        width: 20%;
        height: 100%;
          img{
            width: 100%;
          }
      }

      .content{
        width: 50%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

          h3, p{
            width: 100%;
            font-size: 1.3rem;
            height: fit-content;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          p{
            font-size: 1rem;
            font-style: italic;
          }

          span{
            font-size: 1.3rem;
            font-weight: 700;
            color: green;
          }

          & .props.amounter{
            width: 100%;
            display: flex;
            gap: 10px;

            & .btn{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                font-weight: bold;
                font-size: 1.3rem;
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
                color: red;

                & span{
                  font-size: 1.3rem;
                }
                  &:hover{
                    background-color: black;
                  }

                  &:active{
                    transform: scale(.97);
                  }
              }
          }
      }

      .Delete{
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

          img{
            width: 80%;
          }
      }
`;

const CardProduct = (props) => {

const incremento = (id) => {
  const newProduct = props.cart.find((item) => item.id === id);
    const newCart = props.cart.map((item) => {
      if (item.id === id) {
        return { ...newProduct, amount: newProduct.amount + 1 };
      } else {
        return item;
      }
    });
    props.setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(props.cart))
}

const decremento = (id) => {
  const produto = props.cart.find((item) => item.id === id);

  if (produto.amount > 1) {
    const newCart = props.cart.map((item) => {
      if (item.id === id) {
        return { ...produto, amount: produto.amount - 1 };
      } else {
        return item;
      }
    });

    props.setCart(newCart);
  } else {
    const novoCarro = props.cart.filter((item) => item.id !== id);
    props.setCart(novoCarro);
  }
}

  const excluirItem = () => {
    const novoValor = props.cart.filter(item => item.titulo !== props.titulo);
    props.setCart(novoValor);
    localStorage.setItem("cart", JSON.stringify(props.cart))
  }


  return (
    <Product>
      <div className="imagemProduto">
        <img src={props.image} alt="Imagem Produto" />
      </div>

      <div className="content">
        <h3>{props.titulo}</h3>
        <p>{props.description}</p>
        <span>$ {props.amount * props.price}</span>
        <div className="props.amounter">
          <a className="btn" onClick={() => decremento(props.id)}> - </a>
          <span>{props.amount}</span>
          <a className="btn" onClick={() => incremento(props.id)}> + </a>
        </div>
      </div>

      <div className="Delete" onClick={excluirItem}>
        <img src={img} alt="Delete" />
      </div>
      
    </Product>
  );
};

export default CardProduct;
