import React, { Component, CSSProperties } from "react";
import { PrintButton } from "./PrintButton";

const container: CSSProperties = {

    position: 'fixed',
    bottom: '50px',
    right: '50px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'space-evenly',
    gap: '20px',

    zIndex: 10,
}

export class Actions extends Component {
    render() {
        return <div
            className="noprint"
            style={container}>
            <PrintButton />
            <PrintButton />
        </div>
    }
}