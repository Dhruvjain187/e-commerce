import { Flex } from "../Components/StyledComponents/Flex.style";
import { Card } from "../Components/StyledComponents/Card";
import { CardContainer } from "../Components/StyledComponents/CardContainer";
import { CardImg } from "../Components/StyledComponents/CardImg";
export default function Men() {
    const womenImg = ["https://images.unsplash.com/photo-1616313253719-c46514cddee1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1603217039640-afce9bb7d785?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1599265866618-44bf5b03def6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1603217039640-afce9bb7d785?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    return (
        <>
            <CardImg>
                <img src="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_640.jpg" alt="" />
                <p>Women</p>
            </CardImg>
            <CardContainer>
                <Card img={womenImg[0]}>
                    <div></div>
                    <p>Zima leto-80$</p>
                    <button>Add to cart</button>
                </Card>

                <Card img={womenImg[1]}>
                    <div></div>
                    <p>Allen solley-570$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={womenImg[2]}>
                    <div></div>
                    <p>TrendYol-2500$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={womenImg[3]}>
                    <div></div>
                    <p>Tahvo-10$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={womenImg[4]}>
                    <div></div>
                    <p>Zima leto-80$</p>
                    <button>Add to cart</button>
                </Card>

                <Card img={womenImg[5]}>
                    <div></div>
                    <p>Allen solley-570$</p>
                    <button>Add to cart</button>
                </Card>

            </CardContainer>
        </>
    );
}