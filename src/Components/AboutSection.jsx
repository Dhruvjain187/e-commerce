import styled from "styled-components";
export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 15em;    
    margin-bottom: 0.1em;
    flex-wrap: wrap;

    .aboutdiv1{
        align-self: center;
        height: 80%;
        width: 48%;
    }

    .aboutdiv1 img{
        height: 100%;
        width: 100%;
    }

    .aboutdiv2{
        height: 100%;
        width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .aboutdiv2 h3{
        font-size: 2.5em;
        font-weight: 800;
    }

    .aboutdiv2 p{
        text-align: start;
        font-size: 1em;
        font-weight: 500;
        line-height: 2em;
    }

    .aboutdiv2 button{
        border: 0.1px solid black;
        background-color: white;
        color:black;
        font-size: 1em;
        height: 3em;
        width: 11em;
        padding: 1em;
        border-radius: 0.8em;
    }

    @media(max-width:1000px){
        &{
            flex-direction: column;
        }

        .aboutdiv1{
            height: 50%;
            width: 100%;
            /* justify-self: stretch; */
            /* align-self: stretch; */
        }

        .aboutdiv1 img{
            height: 100%;
            width: 100%;;
        }

        .aboutdiv2{
            /* justify-content: center; */
            height: 50%;
            width: 100%;
            /* justify-self: stretch; */
            /* align-self: stretch; */
        }

        .aboutdiv2 h3{
            margin:0.5em 0 0.5em 0;
            text-align:center;
        }

        .aboutdiv2 p{
            text-align: center;
            line-height: 1.2em;
        }

        .aboutdiv2 button{
            width: 65%;
            margin: 0 auto;
            
        }
    }
`;

export default function AboutSection() {
    return (
        <AboutContainer >
            <div className="aboutdiv1">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/06/09/woman-1867720_640.jpg" alt="" />
            </div>
            <div className="aboutdiv2">
                <h3>Learn our story</h3>
                <p>It’s difficult to tell the story of our stores’ ten years without going back to the beginning. Celebrating 10 years means reflecting on 20 years of adventures and choices. The choice to do better, the choice to be human, the choice to act, but also the choice to trust one’s instinct and convictions. It means writing a new story, that is so much more than a fashion story, but a story of life – mine, yours and every man and woman who helps write it.</p>
                <button>ABOUT US <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </AboutContainer>
    );
}