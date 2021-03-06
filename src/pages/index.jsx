import { useState, useEffect, useLayoutEffect } from 'react'
import CardBoxNews from '../components/shop/template/.global/News/CardBoxNews'
import { getNews } from '../services/MinecartAPI'
import CardBoxNewsLoading from '../components/shop/template/.global/News/CardBoxNewsLoading'
import CardBoxError from '../components/shop/template/.global/CardBoxError'

export default (props) => {
    const { store } = props;

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect (() => {
        getNews().then(function (response) {
            setData(response.data.news)
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
                        <CardBoxNews key={news.id} news={news} {...props}></CardBoxNews>
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
