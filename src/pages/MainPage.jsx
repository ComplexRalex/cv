import { Page, Main, Side, Photo, PhotoContainer } from "../components";
import { getData } from "../data";
import { mapContent } from "../helpers/mapMyContent";
import { useLang } from "../hooks/useLang";
import { useMemo, useState } from "react";
import "../components/styles"

export const MainPage = () => {

    const { lang } = useLang();
    const [secret, setSecret] = useState(false);
    const { data: me } = useMemo(() => getData(lang), [lang]);

    const toggleSecret = () => setSecret(secret => !secret);

    return (
        <Page title={me.title}>
            <Side>
                {me.photo.show &&
                    <PhotoContainer onClick={() => toggleSecret()}>
                        <Photo {...(!secret ? me.photo : me.secret)} />
                    </PhotoContainer>
                }
                {me.side.map(s => mapContent(s))}
            </Side>
            <Main>
                {me.main.map(s => mapContent(s))}
            </Main>
        </Page>
    )
}
