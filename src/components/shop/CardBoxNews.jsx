import CardBox from "./CardBox"

export default ({news}) => {
    return (
        <CardBox style={{padding: 0}}>
            <p>{news.id}</p>
            <p>{news.title}</p>
        </CardBox>
    )
}
