import styled from 'styled-components'
import { CardBox } from '../layout/default/styles';
import {useState, useLayoutEffect} from 'react'
import StoreServerProduct from '../components/shop/template/.global/StoreServerProduct';
import { getServerProducts } from '../services/MinecartAPI'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CardBoxError from '../components/shop/template/.global/CardBoxError';
import StoreServerCash from '../components/shop/template/.global/StoreServerCash';
import StoreServerCategories from '../components/shop/template/.global/StoreServerCategories';

const StoreServerProducts = styled(CardBox)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
`;

export default (props) => {
    const { store } = props

    const params = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    function serverId()
    {
        return params.serverId.split("-")[0]
    }

    useLayoutEffect (() => {
        document.title = `${store.name} | Loja`

        getServerProducts(serverId()).then(function (response) {
            setData(response.data.products)
            setLoading(false)
        }).catch(function () {
            setError(true)
            setLoading(false)
        })
    }, [])

    const renderContent = () => {
        return (
            <>
                <StoreServerCash/>

                <div style={{display: 'flex', gap: 16}}>
                    <StoreServerCategories {...props}/>

                    <StoreServerProducts>
                        {data.map(storeServerProduct => (
                          <StoreServerProduct key={storeServerProduct.id} storeServerProduct={storeServerProduct} {...props}/>
                        ))}
                    </StoreServerProducts>
                </div>
            </>
        )
    }

    const renderEmptyContent = () => {
        return <CardBoxError
            title="Nenhum produto criado"
            description="Não foi criado nenhum produto ate o momento!"
        />
    }

    const renderError = () => {
        return <CardBoxError
            title="Aconteceu um erro"
            description="Não foi possivel carregar os produtos, tente novamente!"
        />
    }

    return loading ? "carregando..."
        : error ? renderError()
        : (data.length == 0) ? renderEmptyContent()
        : renderContent()
}
