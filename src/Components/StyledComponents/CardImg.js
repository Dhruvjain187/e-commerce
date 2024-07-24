import styled from "styled-components";

export const CardImg = styled.div`
    &{
        height: 25em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        border-radius: 1.5em;
    }

    & p{
        display: none;
        z-index: 5;
        opacity: 1;
        font-size: 2em;
        color: white;
        transform: translateY(1em);
        transition:transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
    }

    &:hover p{
        display: block;
        transform: translateY(0em);
    }

    & img{
        z-index: -1;
        position: absolute;
        height: 100%;
        width: 100%;
    }
`