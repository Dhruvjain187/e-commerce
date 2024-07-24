import styled from "styled-components";

export const StyledForm = styled.form`
    width:60%;
    height:60%;
    border-radius: 3em;
    padding: 2.5em;
    margin:2em;

    label{
        width: 100%;
        display: block;
        text-align: center;
    }

    input{
        border: none;
        outline: none;
        border-radius: 0.6em;
        width:100%;
        height:2em;
        text-align: center;
    }

    input:hover,input:focus{
        outline: none;
        border: none;
        box-shadow: 2px 2px 20px rgb(178, 246, 247,0.5)
    }

    button{
        border: none;
        width:100%;
        height:3em;
        border-radius: 0.8em;
        background-color: black;
        color: white;
    }

    @media(max-width:370px){
        &{
            padding: 0px;
        }
    }
`    ;
