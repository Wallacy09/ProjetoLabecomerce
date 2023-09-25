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

          & .counter{
            width: 100%;
            display: flex;
            gap: 10px;

            & a{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                font-weight: bold;
                font-size: 1.3rem;
                background-color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;

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
  const [count, setCount] = useState(1);


  const incremento = () => {
    let somar = count + 1;
    
    setCount(somar);
  }

  const decremento = () => {
    let diminuir = count >= 1 ? count - 1 : 1;
    setCount(diminuir)
  }


  const excluirItem = () => {
    const novoValor = props.cart.filter(item => item.titulo !== props.titulo);
    props.setCart(novoValor);
  }


  return (
    <Product>
      <div className="imagemProduto">
        <img src={props.image} alt="Imagem Produto" />
      </div>

      <div className="content">
        <h3>{props.titulo}</h3>
        <p>{props.description}</p>
        <span>$ {count > 0 ? props.price * count : props.price || count === 0 ? 0 : props.price}</span>
        <div className="counter">
          <a onClick={decremento}> - </a>
          <span>{count}</span>
          <a onClick={incremento}> + </a>
        </div>
      </div>

      <div className="Delete" onClick={excluirItem}>
        <img src={img} alt="Delete" />
      </div>
      
    </Product>
  );
};

export default CardProduct;
