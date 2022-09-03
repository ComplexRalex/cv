import { Content, EventInfo, LabeledInfo, List, ListItem, Rating } from "../components";
import { contentTypes } from "../types";

export const mapContent = (section) => {
    const { title, contents } = section;
    return (
        <Content title={title} key={title}>
            { contents.map(c => mapContentBody(c)) }
        </Content>
    );
}

export const mapContentBody = (content) => {
    switch (content.type) {
        case contentTypes.paragraph:
            return mapToParagraph(content);
        case contentTypes.event:
            return mapToEventInfo(content);
        case contentTypes.labeled:
            return mapToLabeledInfo(content);
        case contentTypes.list:
            return mapToList(content);
        default:
            return <>Wrong data, buddy. Oops...</>
    }
}

const mapToParagraph = (content) => {
    const { text } = content.data;
    return (
        <p key={text}>
            { text }
        </p>
    );
}

// I know I can reduce code, but I left it in this way
// because of possible future debug processes
const mapToEventInfo = (content) => {
    const { title, subtitle, when } = content.data;
    return (
        <EventInfo key={title+subtitle+when}
            title={title}
            subtitle={subtitle}
            when={when}
        />
    );
}

const mapToLabeledInfo = (content) => {
    const { label, info } = content.data;
    return (
        <LabeledInfo key={label}
            label={label}
            info={info}
        />
    );
}

const mapToList = (content) => {
    const { elements = [] } = content.data;
    return (
        <List key={elements.map(({title, rating}) => `${title}-${rating}`)}>
            {
                elements.map(({ title, rating }) => (
                    <ListItem key={title+rating}>
                        <span>{ title }</span>
                        {rating && <Rating rate={rating} />}
                    </ListItem>
                ))
            }
        </List>
    );
}
