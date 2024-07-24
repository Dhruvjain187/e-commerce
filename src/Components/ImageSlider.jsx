import styled from "styled-components";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export const SliderContainer = styled.div`
    width:100%;
    height:100%;
    border-top-left-radius:1em;
    border-top-right-radius:1em;
    position: relative;
    padding:0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;


    p{
        text-align: center;
        color: white;
        opacity: 1;
        font-weight: bolder;
        font-size: 2em;
    }
`;

export const SliderImage = styled.img`
    /* object-fit: cover; */
    border-top-left-radius:1em;
    border-top-right-radius:1em;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: block;
`;

export const SliderBtn = styled.button`
    all: unset;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    transition: 0.5s;

    &>*{
        stroke: white;
        fill: black;
        height: 2rem;
        width: 2em;
    }

    &:hover{
        background-color: rgba(0,0,0,0.2);
    }

`;

export default function ImageSlider({ imgArr, imgContent }) {
    const [imgIndex, setImgIndex] = useState(0);

    const rightArrowHandler = () => {
        setImgIndex((prevIdx) => {
            return (prevIdx + 1) % (imgArr.length);
        })
    }

    const leftArrowHandler = () => {
        setImgIndex((prevIdx) => {
            return (imgArr.length - 1 + prevIdx) % (imgArr.length);
        })
    }

    return (
        <SliderContainer style={{ backgroundImage: `url(${imgArr[imgIndex]})`, backgroundSize: "100% 100%" }}>
            <p>{imgContent[imgIndex]}</p>
            <SliderBtn onClick={leftArrowHandler} style={{ left: 0, borderTopLeftRadius: "1em" }} ><ArrowBigLeft /></SliderBtn>
            <SliderBtn onClick={rightArrowHandler} style={{ right: 0, borderTopRightRadius: "1em" }}><ArrowBigRight /></SliderBtn>
        </SliderContainer>
    );
}
