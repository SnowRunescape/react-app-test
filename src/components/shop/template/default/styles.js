import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1224px;
`;

export const CardBox = styled.div`
    border-radius: 5px;
    background: #fff;
    color: #73808c;
    box-shadow: 0px 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
    padding: 8px;
`;

export const Header = styled.header`
    position: fixed;
    background: ${store => store.colors.navbar};
    width: 100%;
    padding: 16px;
    color: #fff;
    top: 0;
    z-index: 3;
`;

export const HeaderContianer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const HeaderRight = styled.div`
    ul {
        display: flex;
        gap: 12px;
    }
`

export const HeaderLogo = styled.div`
    font-size: 32px;
`;

export const HeaderSlide = styled.div`
    img {
        width: 100%;
        max-height: 100%;
        min-height: 100%;
        object-fit: cover;
    }
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`;

export const MainBody = styled.div`
    width: 100%;
`;

export const MainSideBar = styled.div`

`;

export const Footer = styled.div`
    text-align: center;
    padding: 16px;
`;
