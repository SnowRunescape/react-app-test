import {useState, useEffect} from 'react'
import CardBoxTeam from '../components/shop/template/.global/Team/CardBoxTeam'
import { getTeam } from '../services/MinecartAPI'
import CardBoxNewsLoading from '../components/shop/template/.global/News/CardBoxNewsLoading'
import CardBoxError from '../components/shop/template/.global/CardBoxError'

export default ({store}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect (() => {
        document.title = `${store.name} | Equipe`

        setData(getTeam())
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
            {data.map(team => (
                <CardBoxTeam key={team.id} team={team}></CardBoxTeam>
            ))}
        </>
    )
}
