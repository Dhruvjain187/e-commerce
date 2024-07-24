import styled from "styled-components";

export const Imagebox = styled.div`
    display: flex;
    /* border-radius: 2em; */
    min-height: 22em;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    background-image:url("https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_1280.jpg") ;
    /* background-size: 300px 100px; */
    background-size: 95% 95%;
    transition: 1s;
    margin-bottom: 0.1em;

    &:hover{
        background-size: 100% 100%;
    }

    div{
        height: 100%;
        width: 40%;
        padding:2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    div button{
        border: none;
        background-color: white;
        color:black;
        font-size: 1em;
        height: 3em;
        width: 11em;
        padding: 1em;
        border-radius: 0.8em;
    }

    div button:focus{
        border: none;
        outline: none;
        background-color: rgba(225, 235, 252);
    }

    h2{
        text-align: start;
        font-size: 2.5em;
        line-height: 1em;
        color: white;
    }

    p{
        text-align: start;
        font-size: 1.8em;
        font-weight: 700;
        color: white;
        opacity: 1;
    }

    @media(max-width:750px){
        &{
            width: 100%;
        }

        & div{
            width: 80%;
        }

        div button{
            font-size: 1em;
            height: 2.5em;
            padding: 0;
            width: 6em;
        }

        h2{
            font-size: 1.8em;
        }

        p{
            font-size: 1em;
        }

    }
`;

export default function ImageContainer() {
    return (
        <Imagebox>
            <div>
                <h2>Get the summer look</h2>
                <p>From your favourite summer brands</p>
                <button>DISCOVER <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </Imagebox>
    );
}