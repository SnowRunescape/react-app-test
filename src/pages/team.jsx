import { useState, useEffect, useLayoutEffect } from 'react'
import CardBoxTeam from '../components/shop/template/.global/CardBoxTeam'
import { getTeam } from '../services/MinecartAPI'
import CardBoxNewsLoading from '../components/shop/template/.global/News/CardBoxNewsLoading'
import CardBoxError from '../components/shop/template/.global/CardBoxError'

export default ({store}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect (() => {
        setData(getTeam())
    }, [])

    useLayoutEffect (() => {
        document.title = `${store.name} | Equipe`
    }, [])

    if (loading) {
        return <CardBoxNewsLoading/>
    }

    if (error) {
        return (
            <CardBoxError
                title="Aconteceu um erro"
                description="Não foi possivel carregar as equipes, tente novamente!"
            />
        )
    }

    if (data.length == 0) {
        return (
            <CardBoxError
                title="Nenhuma notícia publicada"
                description="Não foi publicado nenhuma notícia ate o momento!"
            />
        )
    }

    return (
        <>
            {data.map(team => (
                <CardBoxTeam key={team.id} team={team}></CardBoxTeam>
            ))}
        </>
    )
}
