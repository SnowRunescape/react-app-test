import {useState, useEffect} from 'react'
import CardBoxNews from '../components/shop/template/.global/CardBoxNews'
import MinecartAPI from '../services/api'
import CardBoxNewsLoading from '../components/shop/template/.global/CardBoxNewsLoading'
import CardBoxError from '../components/shop/template/.global/CardBoxError'

export default (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect (() => {
        MinecartAPI.getRules().then(function (response) {
            setData(response.data)
            setLoading(false)
        }).catch(function (response) {
            setError(true)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <CardBoxNewsLoading/>
        )
    }

    if (error) {
        return (
            <CardBoxError title="Nenhuma notícia publicada" description="Não foi publicado nenhuma notícia ate o momento!"/>
        )
    }

    if (data.length == 0) {
        return ("Nenhuma noticia cadastrada");
    }

    return (
        <>
            {data.map(news => (
                <CardBoxNews key={news.id} news={news}></CardBoxNews>
            ))}
        </>
    )
}
