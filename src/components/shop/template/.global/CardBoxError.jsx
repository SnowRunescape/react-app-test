import CardBox from "./CardBox"

export default ({title, description}) => {
    return (
        <CardBox>
            <h2 style={{color: "#333", fontWeight: 400}}>{title}</h2>
            <p>{description}</p>
        </CardBox>
    )
}
