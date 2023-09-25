import Carrinho from './Carrinho/Carrinho';
import { Cabecalho } from './HeaderStyled';
import { Logo } from './Logo/Logo';
import Hamburguer from './Menu Hamburguer/Hamburguer';


export const Header = ({cart, setCart}) => {

    return (
        <>
            <Cabecalho>
                <Hamburguer/>
                <Logo />
                <Carrinho setCart={setCart}  cart={cart}/>
            </Cabecalho>
        </>
    )
}