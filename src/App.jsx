import { MainPage } from "./pages/MainPage";
import { LangProvider } from "./providers/LangProvider";

function App() {
    return (
        <LangProvider>
            <MainPage />
        </LangProvider>
    );
}

export default App;