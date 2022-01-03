import styled from 'styled-components'

const StoreServer = styled.div`
    position: relative;
    background: #ecf0f3;
    text-align: center;

    border-radius: 5px;
    transition: .4s;
    cursor: pointer;

    .logo {
        width: 60%;
        height: 300px;
        max-height: 189.75px;
        margin: 0 auto;
        margin-top: 16px;

        img {
            position: relative;
            max-width: 100%;
            max-height: 100%;
            top: 50%;
            transform: translate(0px,-50%);
        }
    }

    .serverName {
        font-size: 20px;
        font-weight: 600;
        padding: 8px;
        height: 64px;

        span {
            position: relative;

            top: 50%;


            color: #333;
        }
    }

    :hover {
        background: #dce7ef;
    }

    :not(:first-of-type) {
        margin-top: 0px;
    }
`;

export default (props) => {
    const { storeServer } = props

    return (
        <StoreServer>
            <div className="logo">
                <img src={storeServer.image}/>
            </div>

            <div className="serverName">
                <span>{storeServer.name}</span>
            </div>
        </StoreServer>
    )
}
