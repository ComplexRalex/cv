import { MainPage } from "./pages/MainPage";
import { LangProvider, ShowPictureProvider, ShowSecretProvider } from "./providers";

function App() {
    return (
        <LangProvider>
            <ShowSecretProvider>
                <ShowPictureProvider>
                    <MainPage />
                </ShowPictureProvider>
            </ShowSecretProvider>
        </LangProvider>
    );
}

export default App;