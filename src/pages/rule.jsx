import styled from 'styled-components'
import { CardBox } from '../layout/default/styles';
import {useState, useEffect} from 'react'
import { getRules } from '../services/MinecartAPI'
import StoreRule from '../components/shop/template/.global/StoreRule';

const StoreRules = styled(CardBox)`
    display: grid;
    grid-gap: 16px;
`;

export default () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect (() => {
        getRules().then(function (response) {
            setData(response.data.rules)
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
        <StoreRules>
            {data.map(rule => (
              <StoreRule key={rule.id} rule={rule}/>
            ))}
        </StoreRules>
    )
}
