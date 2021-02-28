import { darkGray, white, myBlue, lightGray } from "../Components/Styles"
import facebook from './icons/facebook.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import location from './icons/location.png'
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import twitter from './icons/twitter.png'
import { CV } from './CV'

export const guilherme12012019: CV = {
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
                        value: 'Estágio na área de desenvolvimento e manutenção de sistemas',
                        style: {
                            fontSize: '14px'
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
                    value: '041 99900-2224',
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
                    value: 'rua Cascavel 269, Boqueirão, Curitiba-PR',
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
                    value: 'Github.com/ Guilherme8482'
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
                        value: 'Jan 2016 - Encerramento em 2019',
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
                        value: 'Desenvolvedor full stack para sistemas web com experiência em testes automatizados...',
                        style: {color: lightGray}
                    }
                ],
                [
                    {
                        value: 'Iniciação científica PIBIC - PUCPR'
                    },
                    {
                        value: 'Mai 2018 –  Atual',
                        style: {color: myBlue}
                    },
                    {
                        value: 'Desenvolvimento e analise de algoritmos de otimização para identificar padrões de deslocamento de pessoas com base em informações georreferenciadas.',
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
                        {name: 'JAVASCRIPT', size: 85},
                        {name: 'HTML + CSS', size: 70},
                        {name: 'SWIFT', size: 60},
                        {name: 'C++', size: 60},
                        {name: 'REACT', size: 70},
                        {name: 'MYSQL', size: 80}
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
                        value: 'Gerenciador de Grafos'
                    },
                    {
                        value: 'Aplicativo de desktop para criar e manipular estruturas de grafos de forma visual.',
                        style: {color: lightGray}
                    }
                ],
                [
                    {
                        value: 'Sistema especialista para Hanseníase'
                    },
                    {
                        value: 'Aplicação web para auxiliar profissionais das áreas de medicina e afim a padronizar resultados encontrados em pacientes com a doença.',
                        style: {color: lightGray}
                    }
                ]
            ]
        }
    ]
}