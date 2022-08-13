import { Page, Main, Side, Content, EventInfo, LabeledInfo, Photo, ListItem, List, Rating } from "./components";
import { data } from "./data/data";
import { mapContent } from "./helpers/mapMyContent";
import "./components/styles"

const me = data.data;

function App() {

    return (
        <Page title={me.title}>
            <Side>
                { me.photo.show && <Photo {...me.photo} />}
                { me.side.map(s => mapContent(s)) }
            </Side>
            <Main>
                { me.main.map(s => mapContent(s)) }
            </Main>
        </Page>
    )
}

export default App
