import { Page, Main, Side, Photo, PhotoContainer } from "../components";
import { getData } from "../data";
import { mapContent } from "../helpers/mapMyContent";
import { useLang, useShowPicture, useShowSecret } from "../hooks";
import { useMemo } from "react";
import "../components/styles"

export const MainPage = () => {

    const { lang } = useLang();
    const { showingPicture } = useShowPicture();
    const { showingSecret, showSecret, hideSecret } = useShowSecret();
    const { data: me } = useMemo(() => getData(lang), [lang]);

    const toggleSecret = () => showingSecret ? hideSecret() : showSecret();

    return (
        <Page title={me.title} tooltips={me.tooltips} secret={showingSecret}>
            <Side>
                {showingPicture &&
                    <PhotoContainer onClick={() => toggleSecret()}>
                        <Photo {...(!showingSecret ? me.photo.normal : me.photo.secret)} />
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
