import CardBox from "../CardBox"
import ContentLoader from "react-content-loader"

export default (props) => {
    return (
        <CardBox style={{padding:0}}>
            <ContentLoader
                speed={2}
                width="100%"
                height="315px"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="16" y="16" rx="0" ry="0" width="48%" height="290"/>
                <rect x="51%" y="16" rx="16" ry="0" width="48%" height="290"/>
            </ContentLoader>
        </CardBox>
    )
}
