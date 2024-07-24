import ImageSlider from "./ImageSlider";
import { Container } from "./StyledComponents/Container.style";
import { MainContent } from "./StyledComponents/MainContent.style";
import { Text } from "./StyledComponents/Text.style";
import { Flex } from "./StyledComponents/Flex.style";
import ImageContainer from "./ImageContainer";
import AboutSection from "./AboutSection";
import Newspaper from "./Newspaper";
import { NavLink } from "react-router-dom";
import TrendComp from "./Trend";
export default function Content() {
    const imgArr = ["https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=1024x1024&w=is&k=20&c=82pSUE9lg5vX7YUtl7g5Pzyo02VCyXBhR9b5T2SJ4_w=",
        "https://cdn.pixabay.com/photo/2020/09/28/01/16/man-5608277_640.jpg",
        "https://cdn.pixabay.com/photo/2024/01/25/11/29/boy-8531667_640.jpg",
        "https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg"];

    const imgContent = ["Your One - Stop Style Destination", "Wardrobe Wonders Await", "Elevate Your Everyday Style"
        , "Fashion That Adds Sparkle to Your Life"
    ];

    return (
        <>
            <MainContent>
                <ImageSlider imgArr={imgArr} imgContent={imgContent} />
            </MainContent>

            <Flex wrap="wrap" minheight="10em" borderbottom="0.1em solid #d6d6c2">
                <div className="delivery">
                    <h2 className="delivery-h2"><i class="fa-solid fa-truck"></i> Free Shipping</h2>
                    <p className="delivery-para">Delivery is free above a certain threshold.</p>
                    <p className="delivery-para">Discover more in our <span>FAQ</span>.</p>
                </div>
                <div className="delivery">
                    <h2 className="delivery-h2"><i class="fa-solid fa-arrow-rotate-left"></i> 30-day Returns</h2>
                    <p className="delivery-para">We provide easy 30-day returns for our clients.</p>
                    <p className="delivery-para">Discover more in our <span>FAQ</span>.</p>
                </div >
                <div className="delivery">
                    <h2 className="delivery-h2"><i class="fa-solid fa-lock"></i> Secure Payment</h2>
                    <p className="delivery-para">we use secure payments to take care of your privacy</p>
                    <p className="delivery-para">Discover more in our <span>FAQ</span>.</p>
                </div>
            </Flex>

            <Container>
                <div className="container-1a">
                    <div>
                        <button><NavLink to="/women">Women's clothes  <i class="fa-solid fa-arrow-right"></i></NavLink></button>
                    </div>
                </div>
                <div className="container-1b">
                    <div>
                        <button><NavLink to="/men">Men's clothes <i class="fa-solid fa-arrow-right"></i></NavLink></button>
                    </div>
                    <div>
                        <button>Undergarments <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </Container>

            <TrendComp />

            <AboutSection />

            <ImageContainer />

            <Newspaper />

            <Text>Our Associated partners</Text>
            <Flex width="90%" minheight="10em" margin="0 auto" wrap="wrap" padding="1em 0 1em 0" align="space-between">
                <div className="logo-container l1">
                </div>
                <div className="logo-container l2">
                </div>
                <div className="logo-container l3">
                </div>
                <div className="logo-container l4">
                </div>
                <div className="logo-container l5">
                </div>
                <div className="logo-container l6">
                </div>

            </Flex>

            <Flex width="90%" minheight="10em" margin="0 auto" wrap="wrap" padding="1em 0 1em 0" align="space-between">
                <div className="logo-container l7">
                </div>
                <div className="logo-container l8">
                </div>
                <div className="logo-container l9">
                </div>
                <div className="logo-container l10">
                </div>
            </Flex>
        </>


    );
}