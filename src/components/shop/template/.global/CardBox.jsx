import { CardBox } from '../../../../layout/default/styles'

export default (props) => {
    return (
        <CardBox {...props}>
            {props.children}
        </CardBox>
    )
}
