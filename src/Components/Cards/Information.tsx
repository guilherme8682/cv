import React, { Component } from 'react'
import { Information as InfoData } from '../../Data/CV'

export class Information extends Component<{info: InfoData}>{
    render(){
        const i = this.props.info
        return <div style={i.style}>
            <div>
                {i.value}
            </div>
        </div>
    }
}

