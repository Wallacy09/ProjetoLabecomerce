import { styled } from "styled-components";
import imagem from '../../../assets-img/Logo/Logoo.png'

export const ContainerIMG = styled.div`
    width: 80px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

        img{
            display: block;
            width: 100%;
        }

        h2{
            font-size: 2rem;
            color: white;
        }

        @media only screen and (max-width: 480px){
            width: 60%;
            img{
                width: 20%;
            }
            

            h2{
                font-size: 1.5rem;
            }
        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
            width: 30%;
            img{
                width: 30%;
            }

            h2{
                font-size: 2rem;
            }
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){
            width: 30%;
            img{
                width: 20%;
            }

            h2{
                font-size: 2rem;
            }
        }
`;

export const Logo = () => {
    return (
        <>
            <ContainerIMG>
                <img src={imagem} alt="Logo Do site" />
                <h2>Cosmos</h2>
            </ContainerIMG>
        </>
    )
}