import styled from 'styled-components'
import { CardBox } from '../../../../../layout/default/styles';

export const CardBoxTeam = styled(CardBox)`
    padding: 0px;

    .title {
        background: ${team => team.color};
        padding: 12px;
        border-radius: 5px 5px 0px 0px;
        color: #fff;
        text-shadow: 2px 2px 3px #000;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        padding: 12px;
        text-align: center;

        .member {
            min-width: 160px;
        }
    }
`;
