import CardBox from "../CardBox"
import ContentLoader from "react-content-loader"

export default (props) => {
    return (
        <CardBox style={{padding:0}}>
            <ContentLoader
                speed={2}
                width="100%"
                height="220px"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="55"/>

                <rect x="90" y="75" rx="0" ry="0" width="96" height="96"/>
                <rect x="90" y="180" rx="0" ry="0" width="96" height="20"/>

                <rect x="276" y="75" rx="0" ry="0" width="96" height="96"/>
                <rect x="276" y="180" rx="0" ry="0" width="96" height="20"/>

                <rect x="462" y="75" rx="0" ry="0" width="96" height="96"/>
                <rect x="462" y="180" rx="0" ry="0" width="96" height="20"/>

                <rect x="648" y="75" rx="0" ry="0" width="96" height="96"/>
                <rect x="648" y="180" rx="0" ry="0" width="96" height="20"/>
            </ContentLoader>
        </CardBox>
    )
}
