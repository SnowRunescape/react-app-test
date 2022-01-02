import { Footer } from '../../../../layout/default/styles'

export default ({store}) => {
    return (
        <>
            <Footer>
                {store.name} ® Todos os direitos reservados!
            </Footer>
        </>
    );
}
