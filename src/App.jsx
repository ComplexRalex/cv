import { Page, Main, Side, Content, EventInfo, LabeledInfo, Photo } from "./components";
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
                        info="Locochón"
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
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>58</li>
                    </ul>
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
