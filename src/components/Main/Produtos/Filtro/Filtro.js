import { styled } from "styled-components";

export const FiltroDiv = styled.div`
    width: 15%;
    height: 100;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: linear-gradient(to right, #e2b700, #980098 );

        form{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;

                label{
                    width: 100%;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: black ;
                        input{
                            margin: 20px auto;
                            width: 90%;
                            display: block;
                            border-radius: 8px;
                            background-color: black;
                            height: 50px;
                            border: none;
                            padding-left: 20px;
                            color: white;
                        }

                }
                div{
                    align-items: center;
                    justify-content: center;
                    display: flex;
                }
        }
        .text-center {
            align-items: center;
            justify-content: center;
            display: flex;
            margin-top: 20%;
        }

        select{
            margin: 0 auto;
            width: 90%;
            height: 50px;
            border-radius: 8px;
            text-align: center;
            border: 2px solid  black;
            outline: none;
            background-color: #f1f1f1f1;
            margin-bottom: 40%;
        }

        @media only screen and (max-width: 768px){
            width: 100%;
        }
`;

export const Filtro = (props) => {

return (
    <FiltroDiv>
        <h2 className="text-center">Filtros:</h2><br/>
        <form>
            <label htmlFor="minPreco">
                <div>Preço minimo:</div>
                <input value={props.minFilter} onChange={(e) => props.setMinFilter(e.target.value)} type="number" name="minPreco" id="minPreco" placeholder="Digite o valor minimo"/>
            </label>

            <label htmlFor="maxPreco">
                <div>Preço maximo:</div>
                <input value={props.maxFilter} onChange={(e) => props.setMaxFilter(e.target.value)} type="number" name="maxPreco" id="maxPreco" placeholder="Digite o valor maximo"/>
            </label>
        </form>

        <select value={props.valor} onChange={(e) => props.setValor(e.target.value)} >
            <option  value="">Selecione por categoria</option>
            {props.lista}
        </select>
    </FiltroDiv>
);
}

