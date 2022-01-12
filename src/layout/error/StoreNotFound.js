import styled from 'styled-components'

const Main = styled.div`
    width: 360px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 64px;
    text-align: center;

    h1 {
        margin-bottom: 12px;
        color: #333;
    }

    p {
        color: #73808c;

        b {
            color: #333;
            text-transform: uppercase;
            padding: 0px 4px;
        }

        &:not(:first-of-type) {
            margin-top: 6px;
        }
    }

    a {
        display: block;
        margin-top: 10px;
        background: #662780;
        width: 100%;
        text-decoration: none;
        border: none;
        padding: 16px;
        color: #fff;
        font-size: 18px;
        border-radius: 5px;
        transition: .4s;
        outline: none;
        cursor: pointer;

        &:hover {
            background: #591973
        }
    }
`;

const Copyright = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;

    img {
        width: 128px;
    }
`;

export default () => {
    document.title = "Opsss... Loja não encontrada!"
    document.body.style.backgroundColor = "#ecf0f3"

    return (
        <>
            <Main>
                <h1>404</h1>
                <p>A loja que você está procurando</p>
                <p>(<b>{window.location.hostname}</b>)</p>
                <p>não foi encontrada!</p>

                <a href="https://minecart.com.br/">Conheça o Minecart</a>
            </Main>

            <Copyright>
                <img src="https://cdn.minecart.com.br/assets/img/logo.png"/>
            </Copyright>
        </>
    );
}
