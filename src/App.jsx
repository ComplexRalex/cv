import { Page, Main, Side, Content, EventInfo, LabeledInfo, Photo, ListItem, List, Rating } from "./components";
import picture from "./assets/img/pic.png";
import "./components/styles"

function App() {

    return (
        <Page title="Alejandro Batres Pedroza">
            <Side>
                <Photo src={picture} />
                <Content title="Contacto">
                    <LabeledInfo
                        label="Algo"
                        info="Locochón"
                    />
                    <LabeledInfo
                        label="Algo"
                        info="Colchón"
                    />
                </Content>
            </Side>
            <Main>
                <Content title="Perfil">
                    Velit reprehenderit est pariatur cillum occaecat.
                </Content>
                <Content title="Formación">
                    Velit reprehenderit est pariatur cillum occaecat.
                </Content>
                <Content title="Formación">
                    Velit reprehenderit est pariatur cillum occaecat.
                </Content>
                <Content title="Formación">
                    <List>
                        <ListItem>
                            <span>Esterno</span>
                            <Rating rate={7} />
                        </ListItem>
                        <ListItem>
                            <span>Cleido</span>
                            <Rating rate={5} />
                        </ListItem>
                        <ListItem>
                            <span>Masto</span>
                            <Rating rate={3} />
                        </ListItem>
                        <ListItem>
                            <span>Ideo</span>
                            <Rating rate={1} />
                        </ListItem>
                        <ListItem>
                            <span>xD</span>
                        </ListItem>
                    </List>
                </Content>
                <Content title="Formación">
                    <EventInfo
                        title="Esterno cleido"
                        subtitle="Mastoideo"
                        when="xD"
                    />
                    <p>
                        Do aliqua do veniam est aliquip magna et ut quis nulla aliquip culpa fugiat voluptate.
                    </p>
                </Content>
            </Main>
        </Page>
    )
}

export default App
