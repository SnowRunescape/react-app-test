import Footer from '../components/shop/template/default/Footer';
import Header from '../components/shop/template/default/Header';
import { Container } from '../components/shop/template/default/styles'

export default (props) => {
    return (
        <>
            <Header {...props}/>
            <Container>
                {props.children}
            </Container>
            <Footer {...props}/>
        </>
    );
}
