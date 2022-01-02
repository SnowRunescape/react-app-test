import { CardBox } from '../shop/template/default/styles'

export default (props) => {
    return (
        <CardBox {...props}>
            {props.children}
        </CardBox>
    )
}
