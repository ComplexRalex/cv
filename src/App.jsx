import { Content } from "./components/Content"
import { EventInfo } from "./components/EventInfo"
import { LabeledInfo } from "./components/LabeledInfo"
import { Main } from "./components/Main"
import { Page } from "./components/Page"
import { Side } from "./components/Side"

function App() {

    return (
        <Page title="Alejandro Batres Pedroza">
            <Side>
                <Content title="Contacto">
                    <LabeledInfo
                        label="Algo"
                        info={<b>Locochón</b>}
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
