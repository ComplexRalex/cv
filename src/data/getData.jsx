import { contentTypes, langTypes, rateTypes } from "../types";
import picture from "../assets/img/pic4.jpg";
import secret from "../assets/img/secret.gif";
import { data } from "./data";

export const getData = (lang = langTypes.en) => {

    if (![langTypes.en, langTypes.es].includes(lang))
        return { data: {} };

    const { data: { [lang]: info } } = data;

    return {
        data: {
            title: "Alejandro Batres Pedroza",
            photo: {
                normal: {
                    src: picture,
                    title: "Alejandro Batres",
                    alt: "Alejandro Batres' photo",
                },
                secret: {
                    src: secret,
                    title: "Ralex",
                    alt: "Ralex (Easter Egg)",
                }
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
                                info: <a href="mailto:ralexba3@gmail.com" target="_blank">
                                    ralexba3@gmail.com
                                </a>,
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: "LinkedIn",
                                info: <a href="https://www.linkedin.com/in/ralexba3/" target="_blank">
                                    linkedin.com/in/ralexba3
                                </a>,
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: "GitHub",
                                info: <a href="https://github.com/ComplexRalex" target="_blank">
                                    github.com/ComplexRalex
                                </a>,
                            },
                        },
                        {
                            type: contentTypes.labeled,
                            data: {
                                label: info["contact-label-phone"],
                                info: <a href="tel:+522211601040" target="_blank">
                                    +52 221 160 1040
                                </a>,
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
                    title: info["experience-title"],
                    contents: [
                        {
                            type: contentTypes.event,
                            data: {
                                title: <>{info["experience-event-sk-title"]} - <i>{info["experience-event-sk-title-role"]}</i></>,
                                subtitle: info["experience-event-sk-subtitle"],
                                when: info["experience-event-sk-when"]
                            },
                        },
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["experience-event-sk-list-element-1"],
                                    },
                                    {
                                        title: info["experience-event-sk-list-element-2"],
                                    },
                                ]
                            },
                        },
                        {
                            type: contentTypes.event,
                            data: {
                                title: <>{info["experience-event-pp-title"]} - <i>{info["experience-event-pp-title-role"]}</i></>,
                                subtitle: info["experience-event-pp-subtitle"],
                                when: info["experience-event-pp-when"]
                            },
                        },
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["experience-event-pp-list-element-1"],
                                    },
                                    {
                                        title: info["experience-event-pp-list-element-2"],
                                    },
                                ]
                            },
                        },
                        {
                            type: contentTypes.event,
                            data: {
                                title: <>{info["experience-event-school-dashboard-project-title"]} - <i>{info["experience-event-school-dashboard-project-title-role"]}</i></>,
                                subtitle: info["experience-event-school-dashboard-project-subtitle"],
                                when: info["experience-event-school-dashboard-project-when"]
                            },
                        },
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["experience-event-school-dashboard-project-list-element-1"],
                                    },
                                    {
                                        title: info["experience-event-school-dashboard-project-list-element-2"],
                                    },
                                ]
                            },
                        },
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
                        // {
                        //     type: contentTypes.list,
                        //     data: {
                        //         elements: [
                        //             {
                        //                 title: info["experience-event-mobile-apps-project-list-element-1"],
                        //             },
                        //             {
                        //                 title: info["experience-event-mobile-apps-project-list-element-2"],
                        //             },
                        //         ]
                        //     },
                        // },
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
                    title: info["knowledge-skills-title"],
                    contents: [
                        {
                            type: contentTypes.list,
                            data: {
                                elements: [
                                    {
                                        title: info["knowledge-skills-list-element-langs"],
                                        // rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-basic-web-dev"],
                                        // rating: rateTypes.excellent,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-js-web-dev"],
                                        // rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-js-web-ui"],
                                        // rating: rateTypes.good,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-java-dev"],
                                        // rating: rateTypes.normal,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-mobile-dev"],
                                        // rating: rateTypes.normal,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-databases"],
                                        // rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-gcloud"],
                                        // rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-oci"],
                                        // rating: rateTypes.normal,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-data-structs"],
                                        // rating: rateTypes.good,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-linux-shell"],
                                        // rating: rateTypes.veryGood,
                                    },
                                    {
                                        title: info["knowledge-skills-list-element-git"],
                                        // rating: rateTypes.good,
                                    },
                                ]
                            },
                        },
                    ]
                },
                // {
                //     title: info["certifications-title"],
                //     contents: [
                //         {
                //             type: contentTypes.event,
                //             data: {
                //                 title: info["certifications-event-fher-react-title"],
                //                 subtitle: info["certifications-event-fher-react-subtitle"],
                //                 when: info["certifications-event-fher-react-when"]
                //             },
                //         },
                //         {
                //             type: contentTypes.event,
                //             data: {
                //                 title: info["certifications-event-fher-js-title"],
                //                 subtitle: info["certifications-event-fher-js-subtitle"],
                //                 when: info["certifications-event-fher-js-when"]
                //             },
                //         },
                //         {
                //             type: contentTypes.event,
                //             data: {
                //                 title: info["certifications-event-ats-py-title"],
                //                 subtitle: info["certifications-event-ats-py-subtitle"],
                //                 when: info["certifications-event-ats-py-when"]
                //             },
                //         },
                //     ]
                // },
            ],
            tooltips: {
                title: {
                    normal: info["tooltips-title-normal"],
                    secret: info["tooltips-title-secret"],
                },
            },
        },
    };
}