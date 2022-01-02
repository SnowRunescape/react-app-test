import Footer from '../components/shop/template/default/Footer';
import Header from '../components/shop/template/default/Header';
import MainSideBar from '../components/shop/template/default/SideBar';
import { Container, Main, MainBody } from '../components/shop/template/default/styles'

export default (props) => {
    return (
        <>
            <Header {...props}/>

            <Container>
                <Main>
                    <MainBody>
                        {props.children}
                    </MainBody>

                    <MainSideBar {...props}/>
                </Main>
            </Container>

            <Footer {...props}/>
        </>
    );
}
