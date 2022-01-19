import React, { Component, CSSProperties } from "react";
import { myBlue, white } from "./Components/Styles";
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

    position: 'fixed',
    bottom: '50px',
    right: '50px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    transition: 'all 0.2s 0s ease',
    cursor: 'pointer',
    zIndex: 10,


    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none',
}

const containerHover: CSSProperties = {
    width: '240px',
}

export class PrintButton extends Component {

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
            className="noprint"
        >
            {
                this.state.isHover
                    ? <div style={{marginLeft: '10px'}}>Download em PDF</div>
                    : null
            }
            <br />
            <img src={printImage} alt="Imprimir" style={{ height: '40px', marginRight: '5px' }} />
        </a>
    }
}