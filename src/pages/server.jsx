import styled from 'styled-components'
import { CardBox } from '../layout/default/styles';
import {useState, useLayoutEffect} from 'react'
import StoreServer from '../components/shop/template/.global/StoreServer';
import { getServers } from '../services/MinecartAPI'

const StoreServers = styled(CardBox)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
`;

export default () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useLayoutEffect (() => {
        getServers().then(function (response) {
            setData(response.data.servers)
            setLoading(false)
        }).catch(function (response) {
            setError(true)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return ("caregando...");
    }

    if (error) {
        return ("error...");
    }

    return (
        <>
            <StoreServers>
                {data.map(storeServer => (
                  <StoreServer key={storeServer.id} storeServer={storeServer}/>
                ))}
            </StoreServers>
        </>
    )
}
