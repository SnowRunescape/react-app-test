import styled from 'styled-components'

const Button = styled.button`
    color: #fff;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 4px;
    transition: .4s;
    cursor: pointer;
    outline: none;

    background-color: ${props => {
        if (props.variant == "danger") return "#d9534f";
        if (props.variant == "success") return "#28a745";
        return "#dedede";
    }};

    border: ${props => {
        if (props.variant == "danger") return "#d43f3a";
        if (props.variant == "success") return "#2ab64f";
        return "#dedede";
    }};

    &:hover {
        background-color: ${props => {
            if (props.variant == "danger") return "#c9302c";
            if (props.variant == "success") return "#success";
            return "#dedede";
        }};

        border: ${props => {
            if (props.variant == "danger") return "#ac2925";
            if (props.variant == "success") return "#success";
            return "#dedede";
        }};
    }
`;

export default (props) => {
    const { children } = props

    return (
        <Button {...props}>
            {children}
        </Button>
    )
}
