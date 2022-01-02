import Footer from "../../components/shop/template/transcend/Footer";
import Header from "../../components/shop/template/transcend/Header";

export default ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
