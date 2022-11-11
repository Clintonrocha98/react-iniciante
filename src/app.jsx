import Conteudo from "./components/conteudo";
import Footer from "./components/footer";
import Header from "./components/header";
import Menu from "./components/menu";
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";
import Container from "./components/container";
import Title from "./components/title";

import style from "./styles.module.scss";
import { useState } from "react";

const filmesArr = [
    {
        id: 1,
        title: "filme a",
        content:
            "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis aut blanditiis perspiciatis debitis hic nemo nisi non error repellendus temporibus officiis et incidunt quia soluta, modi odit nam iste.",
    },
    {
        id: 2,
        title: "filme b",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, porro magni. Totam, ea ut, ipsam labore quasi commodi odio, aliquid voluptas aperiam distinctio quis pariatur! Odio impedit nemo nesciunt! Quos.",
    },
    {
        id: 3,
        title: "filme c",
        content: "filme dddd",
    },
    {
        id: 4,
        title: "filme d",
        content: "filme wwwwwww",
    },
    {
        id: 5,
        title: "filme e",
        content: "filme rrrrrrr",
    },
];
export default function App() {
    let [filmeTitle, attTitle] = useState("Filme");
    let [filmeContent, attContent] = useState("text");

    function newTitle(item) {
        filmeTitle = item.title;
        filmeContent = item.content;
        attTitle(filmeTitle);
        attContent(filmeContent);
    }

    return (
        <>
            <div className={style.app}>
                <Container className={style.container}>
                    <Title className={style.title} typeTitle="1">
                        TITULO DINAMICO
                    </Title>
                    <Header>
                        <Nav className={style.nav} />
                    </Header>
                    <Menu className={style.menu} text="Menu" />
                    <Container className={`${style.container}, ${style.box}`}>
                        <Sidebar func={newTitle}>{filmesArr}</Sidebar>
                        <Conteudo className={style.section}>
                            <Title className={style.title} typeTitle="1">
                                {filmeTitle}
                            </Title>
                            <p>{filmeContent}</p>
                        </Conteudo>
                    </Container>
                    <Footer>
                        <Nav className={style.nav} />
                    </Footer>
                </Container>
            </div>
        </>
    );
}
