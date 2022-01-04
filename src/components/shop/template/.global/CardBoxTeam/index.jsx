import { CardBoxTeam } from './style'

export default (props) => {
    const { team } = props

    const renderMembers = (members) => {
        return Object.entries(team.members).map(([memberId, member]) => (
            Member(memberId, member)
        ))
    }

    const Member = (memberId, member) => {
        return (
            <div key={memberId} className="member">
                <img src={`https://mc-heads.net/avatar/${member}/64`}/>
                <p>{member}</p>
            </div>
        )
    }

    const renderTeamEmpty = (team) =>{
        return (
            <div dangerouslySetInnerHTML={{__html: `Não foi configurado nenhum <b style="color: #333;">${team.team}</b> ate o momento!`}} />
        )
    }

    return (
        <CardBoxTeam {...team}>
            <div className="title">
                {team.team}
            </div>

            <div className="container">
                {
                    (team.members.length == 0) ? renderTeamEmpty(team) : renderMembers(team.members)
                }
            </div>
        </CardBoxTeam>
    )
}
