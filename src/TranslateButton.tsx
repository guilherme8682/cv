import React, { Component, CSSProperties } from "react";
import { myBlue, white } from "./Components/Styles";
import { observer } from "mobx-react"
import printImage from './Data/icons/print.png'


const PDF_URL = './GuilhermeRochaCurriculo.pdf'

const container: CSSProperties = {
    backgroundColor: myBlue,
    borderRadius: '50px',
    height: '65px',
    width: '65px',
    color: white,
    fontSize: 20,

    border: '2px solid white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    transition: 'all 0.2s 0s ease',
    cursor: 'pointer',


    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none',
}

const containerHover: CSSProperties = {
    width: '240px',
}


@observer
export class TranslateButton extends Component{

    state = {
        isHover: false
    }

    render() {


        return <a
            title="Download em PDF"
            style={{
                ...container,
                ...(this.state.isHover ? containerHover : {})
            }}
            onMouseMove={() => this.setState({ isHover: true })}
            onMouseLeave={() => this.setState({ isHover: false })}
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
        >
            {
                this.state.isHover
                    ? <div style={{ marginLeft: '10px' }}>Download em PDF</div>
                    : null
            }
            <br />
            <img src={printImage} alt="Trans" style={{ height: '40px', marginRight: '5px' }} />
        </a>
    }
}
