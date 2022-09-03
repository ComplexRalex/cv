import { Page, Main, Side, Photo } from "../components";
import { getData } from "../data";
import { mapContent } from "../helpers/mapMyContent";
import { useLang } from "../hooks/useLang";
import { useMemo } from "react";
import "../components/styles"

export const MainPage = () => {

    const { lang } = useLang();
    const { data: me } = useMemo(() => getData(lang), [lang]);

    return (
        <Page title={me.title}>
            <Side>
                {me.photo.show && <Photo {...me.photo} />}
                {me.side.map(s => mapContent(s))}
            </Side>
            <Main>
                {me.main.map(s => mapContent(s))}
            </Main>
        </Page>
    )
}
