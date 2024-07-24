import { Flex } from "../Components/StyledComponents/Flex.style";
import { Card } from "../Components/StyledComponents/Card";
import { CardContainer } from "../Components/StyledComponents/CardContainer";
import { CardImg } from "../Components/StyledComponents/CardImg";
export default function Men() {
    const mensImg = ["https://images.unsplash.com/photo-1613072848413-b62c7148d3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1594938384824-022767a58e11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1556452577-15f4ca79799b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1613072848413-b62c7148d3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    ]

    return (
        <>
            <CardImg>
                <img src="https://cdn.pixabay.com/photo/2020/10/14/03/18/man-5653200_640.jpg" alt="" />
                <p>Men</p>
            </CardImg>
            <CardContainer>
                <Card img={mensImg[0]}>
                    <div></div>
                    <p>Sweatshirt-20$</p>
                    <button>Add to cart</button>
                </Card>

                <Card img={mensImg[1]}>
                    <div></div>
                    <p>Allen solley-570$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={mensImg[2]}>
                    <div></div>
                    <p>Peter England Elite-2500$</p>
                    <button>Add to cart</button>
                </Card>
                <Card img={mensImg[3]}>
                    <div></div>
                    <p>Tahvo-10$</p>
                    <button>Add to cart</button>
                </Card >
                <Card img={mensImg[4]}>
                    <div></div>
                    <p>Sweatshirt-20$</p>
                    <button>Add to cart</button>
                </Card>

                <Card img={mensImg[5]}>
                    <div></div>
                    <p>Allen solley-570$</p>
                    <button>Add to cart</button>
                </Card>

            </CardContainer >
        </>
    );
}