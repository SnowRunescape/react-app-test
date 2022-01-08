import CardBox from "../CardBox"
import styled from 'styled-components'

const CardBoxNews = styled(CardBox)`
    padding: 0px;

    .header {
        padding: 8px;

        .avatar, .container {
            display: inline-block;
            vertical-align: middle;
        }

        .avatar img {
            width: 64px;
            margin-right: 12px;
            border-radius: 5px;
        }
    }

    .info {
        background-color: ${store => store.customizations.colors['--color1']};
        background-position: center;
        background-size: cover !important;
        min-height: 140px;
        padding: 25px;

        ${news => (news.title != "") && ({
            backgroundImage: `url(${news.image})`
        })}

        .title {
            font-size: 26px;
            font-weight: 600;
            color: #fff;
            text-shadow: 2px 2px 3px #000;
        }
    }

    .body {
        padding: 12px 16px;
        word-break: break-word;
    }
`;

export default (props) => {
    const { store, news } = props;

    return (
        <CardBoxNews {...store} {...news}>
            <div className="header">
                <div className="avatar">
                    <img src={`https://mc-heads.net/avatar/${news.posted_by}/64`}/>
                </div>

                <div className="container">
                    <p>Postado por <b>{news.posted_by}</b></p>
                    <p><b><small>{news.date_post}</small></b></p>
                </div>
            </div>

            <div className="info">
                <div className="title">{news.title}</div>
            </div>

            <div className="body" dangerouslySetInnerHTML={{__html: news.news}}/>
        </CardBoxNews>
    )
}
