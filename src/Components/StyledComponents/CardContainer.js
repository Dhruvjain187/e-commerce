import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center; 
    height:100%;
    padding: 1em;
    flex-wrap:wrap;

    & .card-img{
        height: 22em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        border-radius: 1.5em;
    }

    & .card-img p{
        display: none;
        z-index: 5;
        opacity: 1;
        font-size: 2em;
        color: white;
        transform: translateY(1em);
        transition:transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
    }

    & .card-img:hover p{
        display: block;
        transform: translateY(0em);
    }

    & .card-img img{
        z-index: -1;
        position: absolute;
        height: 100%;
        width: 100%;
    }
    

    @media(max-width:680px){
        & div{
            width:100%
        }
    }  
`