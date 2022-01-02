import { Link } from 'react-router-dom';
import { Header, HeaderContianer, HeaderLeft, HeaderRight, HeaderLogo, HeaderSlide, Container } from './styles'

export default ({store}) => {
    return (
        <>
            <Header {...store}>
                <Container>
                    <HeaderContianer>
                        <HeaderLeft>
                            <HeaderLogo>
                                <Link to="/">{store.name}</Link>
                            </HeaderLogo>

                            <div>
                                {store.storeIp}
                            </div>
                        </HeaderLeft>

                        <HeaderRight>
                            <ul>
                                <li><Link to="/">Início</Link></li>
                                <li><Link to="/shop">Loja</Link></li>
                                <li><Link to="/rules">Regras</Link></li>
                                <li><Link to="/team">Equipe</Link></li>
                            </ul>

                            <ul style={{
                                display: "none"
                            }}>
                                <li><Link to="/cart"><img src="https://cdn.minecart.com.br/assets/img/store/icon-shopping-cart.png"/></Link></li>
                                <li><img src="https://cdn.minecart.com.br/assets/img/store/icon-view-headline.png"/></li>
                            </ul>
                        </HeaderRight>
                    </HeaderContianer>
                </Container>
            </Header>

            <HeaderSlide>
                <img src={store.background}/>
            </HeaderSlide>
        </>
    );
}
