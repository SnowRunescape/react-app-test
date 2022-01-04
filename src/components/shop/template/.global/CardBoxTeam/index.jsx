import { CardBoxTeam } from './style'

export default ({team}) => {
    return (
        <CardBoxTeam {...team}>
            <div className="title">
                {team.team}
            </div>

            <div className="container">
                {Object.entries(team.members).map(([memberId, member]) => (
                    <div key={memberId} className="member">
                        <img src={`https://mc-heads.net/avatar/${member}/64`}/>
                        <p>{member}</p>
                    </div>
                ))}
            </div>
        </CardBoxTeam>
    )
}
