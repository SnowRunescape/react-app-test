import { useState, useEffect, useLayoutEffect } from 'react'
import CardBoxNews from '../components/shop/template/.global/News/CardBoxNews'
import { getRules } from '../services/MinecartAPI'
import CardBoxNewsLoading from '../components/shop/template/.global/News/CardBoxNewsLoading'
import CardBoxError from '../components/shop/template/.global/CardBoxError'

export default ({store}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect (() => {
        getRules().then(function (response) {
            setData(response.data)
            setLoading(false)
        }).catch(function (response) {
            setError(true)
            setLoading(false)
        })
    }, [])

    useLayoutEffect (() => {
        document.title = `${store.name} | Página Inicial`
    }, [])

    const renderContent = () => {
        return (
            <>
                {
                    data.map(news => (
                        <CardBoxNews key={news.id} news={news}></CardBoxNews>
                    ))
                }
            </>
        )
    }

    const renderEmptyContent = () => {
        return <CardBoxError
            title="Nenhuma notícia publicada"
            description="Não foi publicado nenhuma notícia ate o momento!"
        />
    }

    const renderError = () => {
        return <CardBoxError
            title="Aconteceu um erro"
            description="Não foi possivel carregar as noticias, tente novamente!"
        />
    }

    return loading ? <CardBoxNewsLoading/>
        : error ? renderError()
        : (data.length == 0) ? renderEmptyContent()
        : renderContent()
}
