import {useState, useEffect} from 'react'
import CardBoxNews from '../components/shop/CardBoxNews'
import api from '../services/api'

export default () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect (() => {
        api.getRules().then(function (response) {
            setData(response.data)
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
            {data.map(news => (
                <CardBoxNews key={news.id} news={news}></CardBoxNews>
            ))}
        </>
    )
}
