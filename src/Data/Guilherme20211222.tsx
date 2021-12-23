import { darkGray, white, myBlue, lightGray } from "../Components/Styles"
import facebook from './icons/facebook.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import location from './icons/location.png'
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import twitter from './icons/twitter.png'
import { CV } from './CV'

export const Guilherme20211222: CV = {
    card: [
        {
            mainSide: true,
            arrow: {
                position: 9,
                style: {
                    color: darkGray
                }
            },
            style: {
                backgroundColor: darkGray,
                color: white,
                fontSize: '24px'
            },
            component: [
                [
                    {value: 'GUILHERME'},
                    {value: 'EDUARDO'},
                    {value: 'ROCHA', style:{fontWeight: 'bold'}}
                ],
                [
                    {
                        value: 'Objetivo:',
                        style: {
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }
                    },
                    {
                        value: 'Ciência de Dados - Entre outras áreas relacionadas a Análise de Dados',
                        style: {
                            fontSize: '16px'
                        }
                    }
                ]
            ]
        },
        {
            mainSide: true,
            arrow: {
                position: 9,
                style: {
                    color: myBlue
                }
            },
            style: {
                color: white,
                backgroundColor: myBlue
            },
            title: {
                value: 'Contato'
            },
            component: [
                [{
                    link: 'https://api.whatsapp.com/send?phone=5541999002224&text=Ol%C3%A1%20Guilherme.%20Vi%20seu%20curriculo%20online%20e%20gostaria%20de%20falar%20sobre%20',
                    value: '(41) 9 9900-2224',
                    icon: {
                        path: phone,                        
                    }
                }],
                [{
                    link: 'mailto:Guilherme.8482@gmail.com',
                    value: 'Guilherme.8482@gmail.com',
                    icon: {
                        path: mail
                    }
                }],
                [{
                    link: 'https://www.google.com/maps/place/Boqueir%C3%A3o,+Curitiba+-+PR/@-25.5054148,-49.2529249,14z/data=!3m1!4b1!4m13!1m7!3m6!1s0x94dcfb1becf9694b:0x17e82e835a349b3c!2sR.+Cascavel,+1-890+-+Boqueir%C3%A3o,+Curitiba+-+PR,+81670-180!3b1!8m2!3d-25.5042508!4d-49.2508828!3m4!1s0x94dcfaf9f88aea2b:0xbb91a6af57f06b53!8m2!3d-25.5030073!4d-49.2367154',
                    value: 'Boqueirão, Curitiba - PR CEP: 81670180',
                    icon: {
                        path: location
                    }
                }],
                [{
                    link: 'https://www.linkedin.com/in/guilherme8482/',
                    value: 'in/Guilherme8482',
                    icon: {
                        path: linkedin
                    }
                }],
                [{
                    link: 'https://github.com/Guilherme8482',
                    value: 'github.com/Guilherme8482',
                    icon: {
                        path: github
                    }
                }]
            ]
        },
        {
            title: {
                value: 'Formação',
                style: {
                    color: myBlue,
                    backgroundColor: white
                }
            },
            style: {
                backgroundColor: white
            },
            component: [
                [
                    {
                        link: 'https://www.pucpr.br/cursos-graduacao/ciencia-da-computacao/',
                        value: 'Graduação em Ciência da Computação - PUCPR',
                    },
                    {
                        value: 'Jan 2016 - Dez 2020',
                        style: {color: myBlue}
                    }
                ],
                [
                    {
                        link: 'https://hackatruck.com.br/area/Home/O+Projeto/Apresenta%C3%A7%C3%A3o/',
                        value: 'Curso IBM Hackatruck de programação Swift',
                    },
                    {
                        value: 'Jan 2016 – Jun 2016',
                        style: {color: myBlue}
                    }
                ]
            ]
        },
        {
            title: {
                value: 'Experiências',
                style: {color: myBlue}
            },
            style: {
                backgroundColor: white
            },
            component: [
                [
                    {
                        link: 'https://www.linkedin.com/company/portoseguro',
                        value: 'Porto Seguro - Cientista de Dados Pleno'
                    },
                    {
                        value: 'Fev 2021 –  Atual',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Atuo fornecendo insights baseados em dados para auxiliar na tomada de decisão. Entre as principais atividades estão: Web Scraping, Big Data Analysis, Data visualization e ETL.',
                        style: {color: lightGray}
                    },
                    {
                        value: 'Python | Modelagem de dados | Power BI | Azure | Hadoop',
                        style: {color: lightGray}
                    },
                ],
                [
                    {
                        link: 'https://www.linkedin.com/company/sumersoft-tecnologia',
                        value: 'Sumersoft Tecnologia - Analista de Sistemas Pleno'
                    },
                    {
                        value: 'Mai 2018 –  Fev 2021',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Desenvolvimento de ferramentas de análise de dados para gestão de recursos urbanos com foco na automação de processos e administração banco de dados.',
                        style: {color: lightGray}
                    },
                    {
                        value: 'AWS | SQLServer | Postgrees | MongoDB | Python | Jenkins',
                        style: {color: lightGray}
                    },
                ],
                [
                    {
                        link: 'https://www.linkedin.com/school/pontificia-universidade-catolica-do-parana/',
                        value: 'PUCPR - Iniciação Científica PIBIC'
                    },
                    {
                        value: 'Mai 2016 –  Dez 2017',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Projeto de pesquisa em análise de dados georreferenciados com base em algoritmos de otimização para identificar padrões de deslocamento da mobilidade urbana em Curitiba.',
                        style: {color: lightGray}
                    },
                    {
                        value: 'Python | Google API | Google Maps | Excel | Google Cloud',
                        style: {color: lightGray}
                    },
                ]
            ]
        },
        {
            mainSide: true,
            title: {
                value: 'Habilidades',
                style: {color: white}
            },
            style: {
                color: white,
                backgroundColor: darkGray
            },
            component: [
                [{
                    value: 'Linguagens',
                    bar: [
                        {name: 'MYSQL', size: 85, description: '6 anos'},
                        {name: 'Python', size: 95, description: '6 anos'},
                        {name: 'TensorFlow', size: 75, description: '3 anos'},
                        {name: 'R', size: 55, description: '2 anos'},
                    ]
                }]
                
            ],
            subComponent: [
                [{
                    value: 'Idiomas',
                    bar: [
                        {name: 'INGLÊS', size: 70, description: 'avançado'},
                        {name: 'ESPANHOL', size: 40, description: 'iniciante'}
                    ]
                }]
            ]
        },
        {   
            title: {
                value: 'Portfólio',
                style: {color: myBlue}
            },
            style: {
                backgroundColor: white
            },
            component: [
                [
                    {
                        link: 'https://github.com/Guilherme8482/HanseniaseSistemaEspecialista',
                        value: 'Sistema especialista para Hanseníase'
                    },
                    {
                        value: 'Sistema especialista para previsão da forma reacionária de pacientes com Hanseníase',
                        style: {color: lightGray}
                    },
                    {
                        value: 'Java | Modelagem de Dados | Bayesian Networks',
                        style: {color: lightGray}
                    }
				],				
                [
                    {
                        link: 'https://github.com/Guilherme8482/graph-maker',
                        value: 'Graph Maker'
                    },
                    {
                        value: 'Aplicativo de desktop para criar e manipular estruturas de dedados em grafos de forma visual.',
                        style: {color: lightGray}
                    },
                    {
                        value: 'JavaScript | Algoritmos de Otimização | Data Visualization',
                        style: {color: lightGray}
                    }
                ],
            ]
        },
        // {
        //     mainSide: true,
        //     arrow: {
        //         position: 4,
        //         style: {
        //             color: myBlue
        //         }
        //     },
        //     style: {
        //         backgroundColor: myBlue,
        //         color: white,
        //         fontSize: '20px'
        //     },            
        //     link: 'https://github.com/Guilherme8482',
        //     component: [
        //         [{
        //             image: {
        //                 path: github,
        //                 size: 80
        //             },
        //             value: 'Github.com/Guilherme8482',
        //         }]
        //     ]
        // },
    ]
}