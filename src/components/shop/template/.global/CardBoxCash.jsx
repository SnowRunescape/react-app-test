import styled from 'styled-components'
import CardBox from "./CardBox"

const CardBoxCash = styled(CardBox)`
    background: var(--color1);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 18px;

    .title {
        margin-bottom: 8px;
        font-size: 28px;
        font-weight: 600;

        img {
            width: 60px;
            vertical-align: middle;
            margin-right: 6px;
        }
    }

    .description {
        margin: 0 auto;
        max-width: 300px;
        font-weight: 600;
        line-height: 1.5;
    }

    .button {
        margin-top: 16px;
    }
`;

export default (props) => {
    return (
        <CardBoxCash {...props}>
            {props.children}
        </CardBoxCash>
    )
}
