import CardBox from "./CardBox"
import ContentLoader from "react-content-loader"

export default (props) => {
    return (
        <CardBox style={{padding:0}}>
            <ContentLoader
                speed={2}
                width="100%"
                height="300px"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="8" y="8" rx="5" ry="5" width="64" height="64" />
                <rect x="84" y="16" rx="3" ry="3" width="340px" height="21" />
                <rect x="84" y="48" rx="3" ry="3" width="180px" height="16" />

                <rect x="0" y="80" rx="0" ry="0" width="100%" height="140" />

                <rect x="8" y="230" rx="3" ry="3" width="410" height="16" />
                <rect x="8" y="255" rx="3" ry="3" width="380" height="16" />
                <rect x="8" y="280" rx="3" ry="3" width="178" height="16" />
            </ContentLoader>
        </CardBox>
    )
}
