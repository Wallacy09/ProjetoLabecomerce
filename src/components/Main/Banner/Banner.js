
import { styled } from "styled-components";
import  sol  from  "../../../assets-img/Logo/Sol.png"

export const BannerContainer = styled.section`
width: 100%;
min-height: calc(100vh - 15vh);
display: flex;
flex-wrap: wrap;
overflow: hidden;

    .contentBanner{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 100px;
        background: linear-gradient(100deg, #000000, #610061,  #d5b400,  #610061, #000000);

            h1{
                font-size: 3rem;
                margin-top: -34%;
                text-align: center;
                color: #ffffff;
            }

            h3{
                font-size: 2.2rem;
                margin-top: -20px;
                color: #ffffff;
            }
            .textoBanner{
                display: flex;
                gap: 50px;
                flex-direction: column;
                align-items: center;
                width: 100%;
                height: 80%;
                p{
                    font-size: 2rem;
                    margin-top: 24%; 
                    color: #000000;
                    font-weight: bolder;
                    font-family: 'Montserrat', sans-serif;
                }
            }
    }

    .sol{
        margin-top: 8%;
        width: 24%;
        height: 50%;
        opacity: 0.9;
    }

    @media only screen and (max-width: 480px){
        flex-direction: column-reverse;
        gap: 0;
        .contentBanner{
            width: 100%;
            gap: 10px;
            text-align: center;

                h2{
                font-size: 1.8rem;
                text-align: center;
                color: transparent;
                background: linear-gradient(45deg, #00FFCC, #550033, #00000090);
                -webkit-background-clip: text;
                }

                .textoBanner{
                    gap: 30px;
                    p{
                        font-size: 1rem;
                    }
                }
        }

        .imageBanner{
            width: 100%;
        }

        .sol {
            display: none;
        }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
        flex-direction: column-reverse;
        gap: 0;
        .contentBanner{
            width: 100%;
            gap: 10px;
            text-align: center;

                h2{
                font-size: 1.8rem;
                text-align: center;
                color: transparent;
                background: linear-gradient(45deg, #00FFCC, #550033, #00000090);
                -webkit-background-clip: text;
                }

                .textoBanner{
                    gap: 30px;
                    p{
                        font-size: 1rem;
                    }
                }
        }

        .sol{
            opacity: 0.5;
        }

    }

    @media only screen and (min-width: 769px) and (max-width: 1024px){
        height: calc(100vh - 15vh);

        .contentBanner{
            height: 100%;
            padding-top: 50px;
            overflow-y: auto;

                h2{
                    font-size: 1.8rem;
                }
        }
    }

    @media only screen and (min-width: 1025px){
        height: calc(100vh - 15vh);        
        .contentBanner{
            height: 100%;
            padding-top: 50px;
            overflow-y: auto;
            padding: 0 30px;
            gap: 30px;

                h2{
                    font-size: 1.8rem;
                }
        }
        .imageBanner{
            height: 100%;
        }
    
    }

`;

export const Banner = () => {
    return (
        <>
            <BannerContainer>
                <div className="contentBanner">
                <img className="sol" src={sol} alt="Sol" />
                    <h1> Bem-vindo ao Cosmos! </h1>
                    <div className="textoBanner">
                        <h3>Sua loja de roupas espacial</h3>
                        <p>
                            Venha explorar nossas ofertas de outra Galáxia
                        </p>
                    </div>
                    
                </div>
            </BannerContainer>
        </>
    )
}