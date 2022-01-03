import react, { useCallback } from 'react'



export default function SideBar(props) {
    const {renderSideBar = true, store} = props
    const Content = useCallback(() => {
        <>
            {
                renderSideBar ? (<div style={{
                    maxWidth:"310px",
                }}>
                    <Cart discordId={store.discord}/>
                    <Purchases discordId={store.discord}/>
                    <Twitter twitter={store.discord}/>
                    <Discord discord={store.discord}/>
                </div>) : null
            }
        </>
    }, [store])

    return Content
}

function Cart()
{
    return (
        <div></div>
    )
}

function Discord({discord})
{
    if (discord.length < 1) {
        return
    }

    return (
        <div>
            <iframe src={`https://discordapp.com/widget?id=${discord}&theme=dark`} width="100%" height="415" allowtransparency="true" frameBorder="0"/>
        </div>
    )
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
