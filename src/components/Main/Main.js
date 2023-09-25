import { Banner } from "./Banner/Banner"
import { Produto } from "./Produtos/Produto"

export const Main = (props) => {
    return (
        <>
            <Banner/>
            <Produto cart={props.cart} setCart={props.setCart} />
        </>
    )
}