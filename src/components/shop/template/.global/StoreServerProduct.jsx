import styled from 'styled-components'

const StoreServerProduct = styled.div`
    position: relative;
    background: #ecf0f3;
    text-align: center;
    border-radius: 5px;

    .price {
        background: #90ee90;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 5px;
        padding: 4px 6px;
        position: absolute;
        right: 0;
        z-index: 1;
    }

    .logo {
        width: 60%;
        height: 300px;
        max-height: 189.75px;
        margin: 0 auto;
        margin-top: 16px;

        img {
            position: relative;
            max-width: 100%;
            max-height: 100%;
            top: 50%;
            transform: translate(0px,-50%);
            filter: drop-shadow(-5px 5px 7px rgba(0,0,0,0.5));
        }
    }

    .container {
        font-size: 20px;
        font-weight: 600;
        padding: 8px;
        height: 64px;

        .name {
            position: relative;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #333;
        }
    }

    .buttons {
        a {
            display: block;
            padding: 16px;
            text-align: center;
            transition: .4s;
            cursor: pointer;
        }

        .details {
            background: ${store => store.customizations.colors['--color1']};
            color: var(--fontColor1);
        }

        .addToCard {
            background: #28a745;
            color: #fff;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
`;

export default (props) => {
    const { store, storeServerProduct } = props

    return (
        <StoreServerProduct {...store}>
            <div className="price">R$ 9,99</div>
            <div className="logo">
                <img src={storeServerProduct.image}/>
            </div>
            <div className="container">
                <div className="name">{storeServerProduct.name}</div>
            </div>

            <div className="buttons">
                <a className="details" onClick="">Detalhes</a>
                <a className="addToCard" onClick="">Adicionar ao carrinho</a>
            </div>
        </StoreServerProduct>
    )
}
