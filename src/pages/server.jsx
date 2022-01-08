import styled from 'styled-components'
import { CardBox } from '../layout/default/styles';
import { useState, useLayoutEffect } from 'react'
import StoreServer from '../components/shop/template/.global/StoreServer';
import { getServers } from '../services/MinecartAPI'
import CardBoxError from '../components/shop/template/.global/CardBoxError';
import CardBoxServerLoading from '../components/shop/template/.global/News/CardBoxServerLoading';

const StoreServers = styled(CardBox)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
`;

export default (props) => {
    const { store } = props

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useLayoutEffect (() => {
        document.title = `${store.name} | Servidores`

        getServers().then(function (response) {
            setData(response.data.servers)
            setLoading(false)
        }).catch(function (response) {
            setError(true)
            setLoading(false)
        })
    }, [])

    const renderContent = () => {
        return (
            <StoreServers>
                {data.map(storeServer => (
                  <StoreServer key={storeServer.id} storeServer={storeServer}/>
                ))}
            </StoreServers>
        )
    }

    const renderEmptyContent = () => {
        return <CardBoxError
            title="Nenhuma Servidor criado"
            description="Não foi criado nenhum servidor ate o momento!"
        />
    }

    const renderError = () => {
        return <CardBoxError
            title="Aconteceu um erro"
            description="Não foi possivel carregar os servidor, tente novamente!"
        />
    }

    return loading ? <CardBoxServerLoading/>
        : error ? renderError()
        : (data.length == 0) ? renderEmptyContent()
        : renderContent()
}
