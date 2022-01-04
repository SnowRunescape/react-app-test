import { useState } from 'react';
import FadeInOut from "../../../FadeInOut";
import styled from 'styled-components'
import Button from '../../../Button';

const Rule = styled.div`
    text-align: center;

    .title {
        color: #333;
        font-size: 18px;
        font-weight: 600;
    }

    .description {
        padding: 8px 0;
    }

    .punishment {
        max-width: 50%;
        padding: 1%;
        margin-bottom: 0;
        display: block;
        background: #ecf0f3;
        margin: 0 auto;
        margin-top: 8px;
        border-radius: 4px;
    }

    :not(:first-of-type) {
        margin-top: 0px;
    }
`;

export default (props) => {
    const { rule } = props

    const [visible, setVisible] = useState(false)
    const toggleVisible = () => setVisible(!visible)

    return (
        <Rule key={rule.id}>
            <div className="title">{rule.rule}</div>
            <div className="description">{rule.description}</div>

            <Button variant="danger" onClick={toggleVisible}>Punição</Button>

            <FadeInOut show={visible} duration={500}>
                <div className="punishment">{rule.punishment}</div>
            </FadeInOut>
        </Rule>
    )
}
