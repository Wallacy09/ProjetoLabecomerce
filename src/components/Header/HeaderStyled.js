import { styled } from "styled-components";

export const Cabecalho = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background: linear-gradient(100deg, #980098, #000000, #980098 );
    backdrop-filter: blur(5px);
    position: sticky;
    top: 0;
    z-index: 10;

    @media only screen and (max-width: 480px){
        padding: 0 10px;
    }
`;