import { CardBoxTeam } from './style'

export default ({team}) => {
    return (
        <CardBoxTeam {...team}>
            <div className="title">
                {team.name}
            </div>

            <div className="container">
                {team.members.map(member => (
                    <div key={member.id} className="member">
                        <img src={`https://mc-heads.net/avatar/${member.name}/64`}/>
                        <p>{member.name}</p>
                    </div>
                ))}
            </div>
        </CardBoxTeam>
    )
}
