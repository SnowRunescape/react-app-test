import { useState, useEffect, useLayoutEffect } from 'react'
import CardBoxTeam from '../components/shop/template/.global/CardBoxTeam'
import { getTeams } from '../services/MinecartAPI'
import CardBoxTeamLoading from '../components/shop/template/.global/News/CardBoxTeamLoading'
import CardBoxError from '../components/shop/template/.global/CardBoxError'

export default (props) => {
    const { store } = props

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect (() => {
        getTeams().then(function (response) {
            setData(response.data.teams)
            setLoading(false)
        }).catch(function (response) {
            setError(true)
            setLoading(false)
        })
    }, [])

    useLayoutEffect (() => {
        document.title = `${store.name} | Equipe`
    }, [])

    const renderContent = () => {
        return (
            <>
                {Object.entries(data).map(([teamId, team]) => (
                    <CardBoxTeam key={teamId} team={team}></CardBoxTeam>
                ))}
            </>
        )
    }

    const renderEmptyContent = () => {
        return <CardBoxError
            title="Nenhuma equipes criada"
            description="Não foi criada nenhuma equipes ate o momento!"
        />
    }

    const renderError = () => {
        return <CardBoxError
            title="Aconteceu um erro"
            description="Não foi possivel carregar as equipes, tente novamente!"
        />
    }

    return loading ? <CardBoxTeamLoading/>
        : error ? renderError()
        : (data.length == 0) ? renderEmptyContent()
        : renderContent()
}
