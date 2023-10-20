import { styled } from "styled-components";
import car from "../../../../assets-img/Logo/foguete-compras.jpg";

export const Prod = styled.div`
  width: 250px;
  height: 350px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  border-radius: 8px;
  background-color: #f1f1f1f1;
  padding: 20px;
  margin: 50px 16px;

  & .imagemP {
    width: 99%;
    height: 80%;
    overflow: hidden;
    position: relative;

    & span {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      color: yellow;
      border-radius: 50%;
      top: 5px;
      right: 10px;
      transform: rotate(25deg);
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .conteudo {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;

    h2 {
      font-size: 1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    h5 {
      font-size: 1rem;
      color: gray;
      font-style: italic;
    }

    p {
      text-overflow: ellipsis;
      font-style: italic;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.8rem;
    }

    h3 {
      width: 100%;
      color: green;
      font-weight: bold;
      display: flex;
      gap: 20px;
      span {
        color: red;
        font-style: italic;
        text-decoration: line-through;
        opacity: 0.4;
      }
    }

    button {
      width: 80%;
      border-radius: 4px;
      outline: none;
      border: 1px solid black;
      background-color: transparent;
      height: 35px;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.1rem;

      &:hover {
        background-color: black;
        color: white;
      }

      &:active {
        transform: scale(0.97);
        color: blue;
      }
    }

    a {
      width: 35px;
      height: 35px;
      border: 1px dotted gray;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 20px;
      right: 20px;
      border: 1px solid black;
      border-radius: 4px;
      transition: all ease-in-out 100ms;

      img {
        width: 70%;
        height: 70%;
      }

      &:hover {
        transform: scale(1.1);
        background-color: black;
      }
      &:active {
        transform: scale(0.97);
      }
    }
  }
`;

export const CardProduto = (props) => {

  function addCarrinho() {
    const newProduct = props.cart.find(item => item.id === props.produto.id);
    if(newProduct === undefined){
      props.setCart([...props.cart, {...props.produto, amount: 1}])
      console.log(props.cart);
    }else{
      const newCart = props.cart.map((item) => {
        if(item.id === props.produto.id){
          return {...newProduct, amount: newProduct.amount + 1}
        }else{
          return item
        }
      })
      props.setCart(newCart);
    }
  }
  return (
    <Prod>
      <div className="imagemP">
        {props.promo && <span>Promo</span>}
        <img src={props.image} alt="Imagem" />
      </div>
      <div className="conteudo">
        <h2 title={props.titulo}>{props.titulo}</h2>
        <h5>{props.category}</h5>
        <p title={props.description}>{props.description}</p>
        <h3>
          <span>$ {props.desconto}</span> $ {props.price}
        </h3>
        <button>Comprar</button>
        <a href="#!" onClick={addCarrinho}>
          <img src={car} alt="Carrinho" />
        </a>
      </div>
    </Prod>
  );
};
