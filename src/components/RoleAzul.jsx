import {useState, useEffect} from 'react'
import api from '../services/api'

export default () => {
    const [data, setData] = useState([])

    useEffect (() => {
        api.get("/temp/rules").then(function (response) {
            setData(response.data)
        }).catch(function (response) {
            
        })
    }, [])

    return (
        <div>
            <h1>pagina com tela azul</h1>
            {data.map(rule => (
                <div key={rule.id}>
                    <p>{rule.id}</p>
                    <p>{rule.title}</p>
                    <p>{rule.punishment}</p>
                </div>
            ))}
        </div>
    )
}