import { Link } from 'react-router-dom';
import { Header, HeaderContianer, HeaderLeft, HeaderRight, HeaderLogo, HeaderSlide, Container } from '../../../../layout/default/styles'

export default (props) => {
    const { store } = props

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
                                <li><Link to="/"><img src={store.customizations.menu.home.image} width={26}/> Início</Link></li>
                                <li><Link to="/shop"><img src={store.customizations.menu.shop.image} width={26}/>Loja</Link></li>
                                <li><Link to="/rules"><img src={store.customizations.menu.rules.image} width={26}/>Regras</Link></li>
                                <li><Link to="/team"><img src={store.customizations.menu.team.image} width={26}/>Equipe</Link></li>
                            </ul>

                            <ul style={{display: "none"}}>
                                <li><Link to="/cart"><img src="https://cdn.minecart.com.br/assets/img/store/icon-shopping-cart.png"/></Link></li>
                                <li><img src="https://cdn.minecart.com.br/assets/img/store/icon-view-headline.png"/></li>
                            </ul>
                        </HeaderRight>
                    </HeaderContianer>
                </Container>
            </Header>

            <HeaderSlide>
                <img src={store.customizations.background}/>
            </HeaderSlide>
        </>
    );
}
