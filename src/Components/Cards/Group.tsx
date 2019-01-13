import React, { Component, CSSProperties } from 'react'
import { Information as InfoData } from '../../Data/CV'
import { Information } from './Information';
import { IconInformation } from "./IconInformation";
import { BarInformation } from "./BarInformation";

const container: CSSProperties = {
}

export class Group extends Component<{info: InfoData[]}>{
    render(){
        const info = this.props.info
        return <div style={container}>
            {info.map(i => 
                <div>
                    {
                        (i.icon &&
                            <IconInformation icon={i}/>) ||
                        (i.bar &&
                            <BarInformation bar={i}/>) ||
                        <Information info={i}/>
                    }
                </div>
            )}
        </div>
    }
}