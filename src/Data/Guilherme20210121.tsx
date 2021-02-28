import { darkGray, white, myBlue, lightGray } from "../Components/Styles"
import facebook from './icons/facebook.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import location from './icons/location.png'
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import twitter from './icons/twitter.png'
import { CV } from './CV'

export const guilherme21012021: CV = {
    card: [
        {
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
                        value: 'Ciência de Dados',
                        style: {
                            fontSize: '16px'
                        }
                    }
                ]
            ]
        },
        {
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
                    value: '041 99900 2224',
                    icon: {
                        path: phone,
                        
                    }
                }],
                [{
                    value: 'Guilherme.8482@gmail.com',
                    icon: {
                        path: mail
                    }
                }],
                [{
                    value: 'Rua Cascavel, Boqueirão, Curitiba-PR',
                    icon: {
                        path: location
                    }
                }]
            ]
        },
        {
            title: {
                value: 'Social'
            },
            style: {
                color: white,
                backgroundColor: darkGray
            },
            component: [
                [{
                    value: 'Guilherme8482',
                    icon: {
                        path: linkedin
                    }
                }],
                [{
                    value: 'Guilherme8482',
                    icon: {
                        path: facebook
                    }
                }],
                [{
                    value: '@Guilherme8482',
                    icon: {
                        path: twitter
                    }
                }]
            ]
        },
        {
            arrow: {
                position: 4,
                style: {
                    color: myBlue
                }
            },
            style: {
                backgroundColor: myBlue,
                color: white,
                fontSize: '20px'
            },
            component: [
                [{
                    icon: {
                        path: github,
                        size: 80
                    },
                    value: 'Github.com/ Guilherme8482',
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
                        value: 'Graduação em Ciência da Computação - PUCPR',
                    },
                    {
                        value: 'Jan 2016 - Encerramento em 2020',
                        style: {color: myBlue}
                    }
                ],
                [
                    {
                        value: 'Curso IBM Hackatruck de programação Swift',
                    },
                    {
                        value: 'Mai 2016 – Jun 2016',
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
                        value: 'Sumersoft Tecnologia'
                    },
                    {
                        value: 'Mai 2018 –  Atual',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Desenvolvedor de sistemas para gestão de recursos urbanos com foco na automação de processos e análise de dados.',
                        style: {color: lightGray}
                    }
                ],
                [
                    {
                        value: 'Iniciação científica PIBIC - PUCPR'
                    },
                    {
                        value: 'Mai 2018 –  2019',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Análise de dados com base em algoritmos de otimização para identificar padrões de deslocamento de pessoas a partir de informações georreferenciadas.',
                        style: {color: lightGray}
                    }
                ],
                [
                    {
                        value: 'Iniciação científica PIBITI - PUCPR'
                    },
                    {
                        value: 'Mai 2016 –  2017',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Desenvolvimento de sistema especialista para a detecção da forma reacionária em pacientes com Hanseníase',
                        style: {color: lightGray}
                    }
                ]
            ]
        },
        {
            title: {
                value: 'Habilidades',
                style: {color: myBlue}
            },
            style: {
                backgroundColor: white
            },
            component: [
                [{
                    value: 'Linguagens',
                    bar: [
                        {name: 'Python', size: 95},
                        {name: 'R', size: 65},
                        {name: 'TensorFlow', size: 85},
                        {name: 'MYSQL', size: 80},
                    ]
                }]
                
            ],
            subComponent: [
                [{
                    value: 'Idiomas',
                    bar: [
                        {name: 'INGLÊS', size: 70},
                        {name: 'ESPANHOL', size: 40}
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
                        value: 'Sistema especialista para Hanseníase'
                    },
                    {
                        value: 'Sistema especialista para previsão da forma reacionária de pacientes com Hanseníase',
                        style: {color: lightGray}
                    }
				],				
                [
                    {
                        value: 'Graph Maker'
                    },
                    {
                        value: 'Aplicativo de desktop para criar e manipular estruturas de grafos de forma visual.',
                        style: {color: lightGray}
                    }
                ],
            ]
        }
    ]
}