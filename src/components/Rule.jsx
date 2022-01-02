import {useState, useEffect} from 'react'
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
            <h1>pagina com tela vermelha</h1>

            {data.map(rule => (
              <div key={rule.id}>
                  <p>{rule.id}</p>
                  <p>{rule.title}</p>
                  <p>{rule.punishment}</p>
              </div>
            ))}
        </>
    )
}
