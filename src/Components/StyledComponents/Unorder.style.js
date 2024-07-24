import styled from "styled-components";

export const Unorder = styled.ul`
    height:10em;
    flex-basis: 100%;
    display:flex;
    flex-direction:column;
    justify-content:${({ start }) => start || "unset"};
    align-items: center;
    background-color:#FAFAF0;
    padding:0.2em;
    margin:0px;

    & li i:hover{
        color: blue;
    }

    @media(max-width:580px){
        width:100%;
        padding-top:2.5em;
    }
`;