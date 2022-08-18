import { contentTypes, rateTypes } from "../types/types";
import picture from "../assets/img/pic1.jpg";

export const data = {
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
                title: "Contacto",
                contents: [
                    {
                        type: contentTypes.labeled,
                        data: {
                            label: "Nombre",
                            info: "Alejandro Batres Pedroza",
                        },
                    },
                    {
                        type: contentTypes.labeled,
                        data: {
                            label: "Correo electrónico",
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
                            label: "Teléfono",
                            info: "2211601040",
                        },
                    },
                    {
                        type: contentTypes.labeled,
                        data: {
                            label: "Ubicación",
                            info: "Puebla, México",
                        },
                    },
                ]
            },
            {
                title: "Idiomas",
                contents: [
                    {
                        type: contentTypes.list,
                        data: {
                            elements: [
                                {
                                    title: "Español",
                                },
                                {
                                    title: "Inglés",
                                },
                            ]
                        },
                    },
                ]
            },
            {
                title: "Competencias",
                contents: [
                    {
                        type: contentTypes.list,
                        data: {
                            elements: [
                                {
                                    title: "Determinación",
                                },
                                {
                                    title: "Responsabilidad",
                                },
                                {
                                    title: "Disciplina",
                                },
                                {
                                    title: "Análisis de problemas",
                                },
                                {
                                    title: "Trabajo en equipo",
                                },
                            ]
                        },
                    },
                ]
            },
        ],
        main: [
            {
                title: "Perfil",
                contents: [
                    {
                        type: contentTypes.paragraph,
                        data: {
                            text: "Estudiante de ciencias de la computación en busca de un lugar en donde pueda desempeñar todos mis conocimientos y habilidades sobre el desarrollo de aplicaciones web y de escritorio."
                        }
                    },
                ]
            },
            {
                title: "Experiencia",
                contents: [
                    {
                        type: contentTypes.event,
                        data: {
                            title: <>Educación Continua (Servicio social) - <i>Desarrollador Front-end</i></>,
                            subtitle: "Benemérita Universidad Autónoma de Puebla",
                            when: "mayo 2022 - agosto 2022"
                        },
                    },
                    {
                        type: contentTypes.list,
                        data: {
                            elements: [
                                {
                                    title: "Autenticación con JWT",
                                },
                                {
                                    title: "Reutilización de componentes con ReactJS",
                                },
                                {
                                    title: "Validaciones de formularios con Yup",
                                },
                            ]
                        },
                    },
                    {
                        type: contentTypes.event,
                        data: {
                            title: <>Awesome Event Planner (Proyecto) - <i>Desarrollador Flutter</i></>,
                            subtitle: "Benemérita Universidad Autónoma de Puebla",
                            when: "febrero 2022 - mayo 2022"
                        },
                    },
                    {
                        type: contentTypes.list,
                        data: {
                            elements: [
                                {
                                    title: "Consumo de API",
                                },
                                {
                                    title: "Librería Provider para el manejo del estado",
                                },
                                {
                                    title: "Validador de QR",
                                },
                            ]
                        },
                    },
                ]
            },
            {
                title: "Formación",
                contents: [
                    {
                        type: contentTypes.event,
                        data: {
                            title: "Ingeniería en Ciencias de la Computación",
                            subtitle: "Benemérita Universidad Autónoma de Puebla",
                            when: "agosto 2018 - presente"
                        },
                    },
                    {
                        type: contentTypes.paragraph,
                        data: {
                            text: "Actualmente estudio el noveno semestre de la carrera. He desarrollado software en C, C++, Python, Java, y principalmente en JavaScript, en donde he adquirido mucha experiencia en la construcción de aplicaciones web y de escritorio.",
                        },
                    },
                ]
            },
            {
                title: "Conocimientos",
                contents: [
                    {
                        type: contentTypes.list,
                        data: {
                            elements: [
                                {
                                    title: "Lenguajes de programación (Java, C, C++, Python)",
                                    rating: rateTypes.veryGood,
                                },
                                {
                                    title: "Desarrollo de páginas web (HTML 5, CSS, JavaScript)",
                                    rating: rateTypes.excellent,
                                },
                                {
                                    title: "Tecnologías Web (Bootstrap, ReactJS, Axios, JWT)",
                                    rating: rateTypes.veryGood,
                                },
                                {
                                    title: "Desarrollo de aplicaciones móviles (Dart, Flutter)",
                                    rating: rateTypes.normal,
                                },
                                {
                                    title: "Estructuras de datos (árboles binarios, listas ligadas)",
                                    rating: rateTypes.good,
                                },
                                {
                                    title: "Comandos en terminal de distribuciones Linux",
                                    rating: rateTypes.veryGood,
                                },
                                {
                                    title: "Git, GitHub, y GitLab",
                                    rating: rateTypes.good,
                                },
                            ]
                        },
                    },
                ]
            },
            {
                title: "Certificaciones",
                contents: [
                    {
                        type: contentTypes.event,
                        data: {
                            title: "React: De cero a experto ( Hooks y MERN )",
                            subtitle: "Udemy",
                            when: "julio 2022"
                        },
                    },
                    {
                        type: contentTypes.event,
                        data: {
                            title: "JavaScript Moderno: Guía para dominar el lenguaje",
                            subtitle: "Udemy",
                            when: "mayo 2022"
                        },
                    },
                    {
                        type: contentTypes.event,
                        data: {
                            title: "Aprende Programación en Python",
                            subtitle: "Udemy",
                            when: "agosto 2020"
                        },
                    },
                    {
                        type: contentTypes.event,
                        data: {
                            title: "Aprende Programación en C++ (Básico - Intermedio - Avanzado)",
                            subtitle: "Udemy",
                            when: "junio 2019"
                        },
                    },
                ]
            },
        ],
    },
};