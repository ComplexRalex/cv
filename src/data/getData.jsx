import { contentTypes, langTypes, rateTypes } from "../types";
import picture from "../assets/img/pic1.jpg";
import { data } from "./data";

export const getData = (lang = langTypes.en) => {

    if (![langTypes.en, langTypes.es].includes(lang))
        return { data: {} };

    const { data: { [lang]: info } } = data;
    
    return {
        data: {
            title: "Alejandro Batres Pedroza",
            photo: {
                src: picture,
                title: "Alejandro Batres",
                alt: "Alejandro Batres' photo",
                show: true,
            },
            side: [
                {
                    title: info["contact-title"],
                    contents: [
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: info["contact-label-name"],
                                info: "Alejandro Batres Pedroza",
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: info["contact-label-email"],
                                info: "alejandro.batres37@gmail.com",
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: "LinkedIn",
                                info: <a href="https://www.linkedin.com/in/alejandro-b-5516a2128/" target="_blank">
                                    https://www.linkedin.com/in/alejandro-b-5516a2128/
                                </a>,
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: "GitHub",
                                info: <a href="https://github.com/ComplexRalex" target="_blank">
                                    https://github.com/ComplexRalex
                                </a>,
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: info["contact-label-phone"],
                                info: "+52 221 160 1040",
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: info["contact-label-location"],
                                info: "Puebla, México",
                            },
                        },
                    ]
                },
                {
                    title: info["langs-title"],
                    contents: [
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["langs-title-es"],
                                    },
                                    {
                                        title: info["langs-title-en"],
                                    },
                                ]
                            },
                        },
                    ]
                },
                {
                    title: info["soft-skills-title"],
                    contents: [
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["soft-skills-list-element-1"],
                                    },
                                    {
                                        title: info["soft-skills-list-element-2"],
                                    },
                                    {
                                        title: info["soft-skills-list-element-3"],
                                    },
                                    {
                                        title: info["soft-skills-list-element-4"],
                                    },
                                    {
                                        title: info["soft-skills-list-element-5"],
                                    },
                                ]
                            },
                        },
                    ]
                },
            ],
            main: [
                {
                    title: info["profile-title"],
                    contents: [
                        {
                            type: contentTypes.paragraph,
                            data: {
                                text: info["profile-paragraph-content"]
                            }
                        },
                    ]
                },
                {
                    title: info["education-title"],
                    contents: [
                        {
                            type: contentTypes.event,
                            data: {
                                title: info["education-event-college-degree-title"],
                                subtitle: info["education-event-college-degree-subtitle"],
                                when: info["education-event-college-degree-when"]
                            },
                        },
                        {
                            type: contentTypes.paragraph,
                            data: {
                                text: info["education-paragraph-content"],
                            },
                        },
                    ]
                },
                {
                    title: info["experience-title"],
                    contents: [
                        {
                            type: contentTypes.event,
                            data: {
                                title: <>{info["experience-event-ss-title"]} - <i>{info["experience-event-ss-title-role"]}</i></>,
                                subtitle: info["experience-event-ss-subtitle"],
                                when: info["experience-event-ss-when"]
                            },
                        },
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["experience-event-ss-list-element-1"],
                                    },
                                    {
                                        title: info["experience-event-ss-list-element-2"],
                                    },
                                    {
                                        title: info["experience-event-ss-list-element-3"],
                                    },
                                ]
                            },
                        },
                        {
                            type: contentTypes.event,
                            data: {
                                title: <>{info["experience-event-mobile-apps-project-title"]} - <i>{info["experience-event-mobile-apps-project-title-role"]}</i></>,
                                subtitle: info["experience-event-mobile-apps-project-subtitle"],
                                when: info["experience-event-mobile-apps-project-when"]
                            },
                        },
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["experience-event-mobile-apps-project-list-element-1"],
                                    },
                                    {
                                        title: info["experience-event-mobile-apps-project-list-element-2"],
                                    },
                                    {
                                        title: info["experience-event-mobile-apps-project-list-element-3"],
                                    },
                                ]
                            },
                        },
                    ]
                },
                {
                    title: info["knowledge-skills-title"],
                    contents: [
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["knowledge-skills-list-element-langs"],
                                        rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-basic-web-dev"],
                                        rating: rateTypes.excellent,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-js-web-dev"],
                                        rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-mobile-dev"],
                                        rating: rateTypes.normal,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-data-structs"],
                                        rating: rateTypes.good,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-linux-shell"],
                                        rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-git"],
                                        rating: rateTypes.good,
                                    },
                                ]
                            },
                        },
                    ]
                },
                {
                    title: info["certifications-title"],
                    contents: [
                        {
                            type: contentTypes.event,
                            data: {
                                title: info["certifications-event-fher-react-title"],
                                subtitle: info["certifications-event-fher-react-subtitle"],
                                when: info["certifications-event-fher-react-when"]
                            },
                        },
                        {
                            type: contentTypes.event,
                            data: {
                                title: info["certifications-event-fher-js-title"],
                                subtitle: info["certifications-event-fher-js-subtitle"],
                                when: info["certifications-event-fher-js-when"]
                            },
                        },
                        {
                            type: contentTypes.event,
                            data: {
                                title: info["certifications-event-ats-py-title"],
                                subtitle: info["certifications-event-ats-py-subtitle"],
                                when: info["certifications-event-ats-py-when"]
                            },
                        },
                    ]
                },
            ],
        },
    };
}