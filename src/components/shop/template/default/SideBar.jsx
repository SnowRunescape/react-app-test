export default function SideBar(props) {
    const {renderSideBar = true , store} = props

    return renderSideBar ? renderContent(store) : null
}

function renderContent(store)
{
    return (
        <div style={{maxWidth: 310}}>
            <Cart discordId={store.discord}/>
            <Purchases discordId={store.discord}/>
            <Twitter twitter={store.discord}/>
            <Discord discord={store.discord}/>
        </div>
    )
}

function Cart()
{
    return (
        <div></div>
    )
}

function Discord({discord})
{
    return (discord.length > 0) ? (
        <div>
            <iframe src={`https://discordapp.com/widget?id=${discord}&theme=dark`} width="100%" height="415" allowtransparency="true" frameBorder="0"/>
        </div>
    ) : null
}

function Twitter()
{
    return (
        <div>
            <iframe scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true} className="twitter-timeline twitter-timeline-rendered" data-widget-id="profile:brunocaiitano" title="Histórico do Twitter"></iframe>
        </div>
    )
}

function Purchases()
{
    return (
        <div>a</div>
    )
}
