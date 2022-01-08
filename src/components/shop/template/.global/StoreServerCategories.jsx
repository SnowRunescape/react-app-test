import styled from 'styled-components'

const StoreServerCategories = styled.div`
    margin-top: 16px;
    width: 280px;

    h3 {
        text-align: center;
        font-weight: 600;
        color: var(--fontColor0);
    }

    ul {
        margin-top: 8px;

        li {
            list-style-type: none;
            background: ${store => store.customizations.colors['--color1']};
            color: var(--fontColor1);
            padding: 8px;
            border-radius: 5px;
            transition: .4s;
            display: flex;
            align-items: center;
            gap: 3px;
            word-break: break-word;

            .selected {
                background: ${store => store.customizations.colors['--color2']};
                color: var(--fontColor2);
            }
        }
    }
`;

export default ({store}) => {
    return (
        <StoreServerCategories {...store}>
            <h3>Categorias</h3>

            <ul>
                <li><img src="https://cdn.minecart.com.br/assets/img/cube-category.png" width={32} height={32}/>Todas as categorias</li>
            </ul>
        </StoreServerCategories>
    )
}
