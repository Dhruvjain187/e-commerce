import styled from "styled-components";

export const NewsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10em;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
    overflow: hidden;
    min-height: 22em;
    position: relative;

    video{
        position: absolute;
        top: 0;
        z-index: -1;
        min-width: 100%;
        min-height: 100%;
    }

    .span1{
        text-align: center;
        opacity: 1;
        color: white;
        font-size: 2em;
        font-weight: 800;
    }

    .span2{
        opacity: 1;
        text-align: center;
        color: white;
        font-size: 1.3em;
        font-weight: 600;
    }

    form{
        width: 100%;
    }

    .label{
        width: 50%;
        margin: 0 auto;
        display:flex ;
        justify-content: space-between;
    }

    .label input{
        width: 75%;
        text-align: center;
        height: 3em;
        border: none;
        border-radius: 0.5em;
        outline: none;
    }

    .label button{
        width: 10%;
        border-radius: 0.7em;
        border: none;
    }

    @media(max-width:590px){
        & .label button{
            width: 20%;
        }
    }
`;


export default function () {
    return (
        <NewsContainer>
            <video autoPlay loop muted>
                <source src="https://cdn.pixabay.com/video/2024/02/11/200136-912127890_tiny.mp4" type="video/mp4"></source>
            </video>
            <span className="span1">Sign up for our newsletter</span>
            <span className="span2">Get discounts, presale information and a chance to be featured in our Instagram creators feed.</span>
            <form action="">
                <label className="label">
                    <input type="email" placeholder="Email Address" required />
                    <button><i class="fa-solid fa-arrow-right"></i></button>
                </label>
            </form>
        </NewsContainer>
    );
}