import styled from "styled-components";

export const Trend = styled.div`
    height: 20em;
    width: 100%;
    margin-bottom: 0.2em;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    & .image-container{
        height:100%;
        width:100%;
        position: absolute;
        z-index: -1;
        background-image:url("https://cdn.pixabay.com/photo/2021/09/09/12/25/man-6610428_640.jpg");
        background-size:100% 100%;
        /* transition:background-size 1s ease-in-out; */
    }
    

    & .image-container-para{
        padding: 0;
        z-index: 5;
        font-weight: 800;
        color:white;
        font-size: 2.7em;
        text-align: center;
        opacity: 0;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    & .image-container-para:hover{
        opacity: 1;
    }
`;

export default function TrendComp() {
    return (
        <Trend >
            <div className="image-container"></div>
            <p className="image-container-para">Unleash the Trendsetter Within</p>
        </Trend>
    );
}