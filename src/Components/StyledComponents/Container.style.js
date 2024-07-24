import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:30em;
    margin:0.1em auto;


    & .container-1a div,& .container-1b div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        border: none;
        outline: none;
        background-color: rgba(255,255,255,0.8);
        color: black;
        height: 2.7em;
        width: 10em;
        border-radius: 0.7em;
        font-size: 1.1em;
    }

    button a{
        text-decoration: none;
    }

    button:focus{
        background-color: rgba(225, 235, 252);
    }

    .container-1a{
        width: 60%;
        align-items: stretch;
        height:100%;
    }

    .container-1a div{
        background-image: url("https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D");
        background-size: 100% 100%;
        transition: background-size 1s ease-in-out;
    }

    .container-1a div{
        height:100%;
    }

    .container-1b{
        width: 39%;
        height:100%;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
        justify-content: space-between;
    }


    .container-1b div:nth-child(1){
        height: 49.8%;
        background-image: url("https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D");
        background-size: 100% 100%;
        transition: background-size 1s ease-in-out;
    }

    .container-1b div:nth-child(2){
        height: 49.8%;
        background-image: url("https://cdn.pixabay.com/photo/2024/02/09/13/26/ai-generated-8563109_1280.jpg");
        background-size: 100% 100%;
        transition: background-size 1s ease-in-out;
    }

    .container-1a div:hover,.container-1b div:nth-child(1):hover,.container-1b div:nth-child(2):hover{
        background-size: 105% 105%;
    }

    .container-1b div{
        height: 50%;
    }
    



  
    @media(max-width:650px){
        flex-direction:column;
        /* margin: 5em 0 2em 0; */
        height: 40em;
        justify-content: space-between;

        .container-1a{
            height: 38%;
            width:100%;
        }

        .container-1b{
            height: 60%;
            width:100%;
            justify-content: space-between;
        }

        & .container-1a div{
            width:100%;
            height: 100%;
        }

        & .container-1b div{
            width:100%;
            height: 49%;
        }

    }


`;