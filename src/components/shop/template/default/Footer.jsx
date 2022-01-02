import { Footer } from './styles'

export default ({store}) => {
    return (
        <>
            <Footer>
                {store.name} ® Todos os direitos reservados!
            </Footer>
        </>
    );
}
