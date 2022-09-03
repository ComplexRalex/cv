import { Page, Main, Side, Photo } from "../components";
import { getData } from "../data";
import { mapContent } from "../helpers/mapMyContent";
import { Navigate, useParams } from "react-router-dom";
import { langTypes } from "../types";
import { useMemo } from "react";
import "../components/styles"

export const MainPage = () => {

    const { lang } = useParams();
    const { data: me } = useMemo(() => getData(lang), [lang]);

    if (lang && ![langTypes.en, langTypes.es].includes(lang))
        return <Navigate to="/" />

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
