import { Flex } from "../Components/StyledComponents/Flex.style";
import { Card } from "../Components/StyledComponents/Card";
import { CardContainer } from "../Components/StyledComponents/CardContainer";
import { CardImg } from "../Components/StyledComponents/CardImg";
export default function Kid() {
    const kidsImg = ["https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_640.jpg",
        "https://media.istockphoto.com/id/1255032389/photo/portrait-of-little-girl-child-wearing-a-sunglasses-jeans-jacket-on-city-street-over-orange.jpg?s=612x612&w=0&k=20&c=3xYvCDj6unbRLLotvq1FLYc9jUERzwN-dsD80jdU6z8=",
        "https://media.istockphoto.com/id/1398976510/photo/summer-portrait-of-little-girl-child-wearing-sunglasses-checkered-shirt-on-red-background-in.jpg?s=612x612&w=0&k=20&c=RbBzhPfI-8mg7kl4zRF7anf9DHXMUCpysk9chP90MfE=",
        "https://media.istockphoto.com/id/1296361252/photo/child-boy-modern-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=bwsm2iEpXV12l4Js9K8Xa-tKdNRms2u8obdE1mbMriA=",
        "https://media.istockphoto.com/id/1294345604/photo/cute-little-girl-having-fun-time-in-the-nature.webp?b=1&s=170667a&w=0&k=20&c=jXfXoA4aHL2iAfK6Gjz3pooq7Py8irXJC-GYDCihT4M=",
        "https://media.istockphoto.com/id/506317910/photo/beautiful-little-girl-model-wearing-a-leopard-dress-and-sunglass.webp?b=1&s=170667a&w=0&k=20&c=1DHiGRo-6V_2dIbddB4x7kcZSi9U_o4ibNjtYftgxYs="
    ]
    return (
        <>
            <CardImg>
                <img src="https://cdn.pixabay.com/photo/2018/08/07/19/39/childrens-photo-shoot-3590536_640.jpg" alt="" />
                <p>Kids</p>
            </CardImg>
            <CardContainer>
                <Card img={kidsImg[0]}>
                    <div ></div>
                    <p>Coolsters by pantaloons-20$</p>
                    <button>Add to cart</button>
                </Card>

                <Card img={kidsImg[1]}>
                    <div ></div>
                    <p>BAESD-570$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={kidsImg[2]}>
                    <div ></div>
                    <p>U.S.Polo Assn. Kids-2500$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={kidsImg[3]}>
                    <div img={kidsImg[3]}></div>
                    <p>Gini and Jony-10$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={kidsImg[4]}>
                    <div></div>
                    <p>R&B-20$</p>
                    <button>Add to cart</button>
                </Card>

                <Card img={kidsImg[5]}>
                    <div ></div>
                    <p>Allen solley-570$</p>
                    <button>Add to cart</button>
                </Card>

            </CardContainer>
        </>
    );
}