import styled from "styled-components";

export const Card = styled.div`
    width:15em;
    height:20em;
    padding:1em;
    border-radius:2em;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition:1.3s;

    /* &:hover{
        transform:scale(1.1);
        background-color: rgba(132, 225, 220,0.2);
    } */

    div{
        border-top-left-radius:2em;
        border-top-right-radius:2em;
        width:100%;
        height:60%;
        background-image:url(${({ img }) => img || "https://media.istockphoto.com/id/506317910/photo/beautiful-little-girl-model-wearing-a-leopard-dress-and-sunglass.webp?b=1&s=170667a&w=0&k=20&c=1DHiGRo-6V_2dIbddB4x7kcZSi9U_o4ibNjtYftgxYs="});
        background-size: 100% 100%;
        transition:all 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    div:hover{
        background-size: 103% 103%;
    }


    button{
        padding:0.5em;
        border: none;
        border-radius:0.4em;
        background-color:black;
        color:white;
        font-weight: 800;
        cursor: pointer;
    }
`;