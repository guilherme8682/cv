import React, { Component, CSSProperties } from 'react'
import { Information as InfoData } from '../../Data/CV'
import { Information } from './Information';
import { IconInformation } from "./IconInformation";
import { BarInformation } from "./BarInformation";
import { ImageInformation } from './ImageInformation';



const container: CSSProperties = {
    textDecoration: 'none',
    transition: 'all 0.2s 0s ease',
    color: 'inherit',
}
const containerHover: CSSProperties = {
    transform: 'scale(1.05)',
}


export class Group extends Component<{info: InfoData[]}>{

    state = {
        isHover: false,
    }

    render(){
        const info = this.props.info
        const link = info[0].link
        return <a style={{ 
                ...container, 
                ...(this.state.isHover && link ? containerHover : {})
            }}
            href={link}
            target="_blank"
            onMouseEnter={() => { this.setState({isHover: true}) }}
            onMouseLeave={() => { this.setState({isHover: false}) }}>
            {info.map((i, index) => 
                <div key={index}>
                    {
                        (i.icon &&
                            <IconInformation icon={i}/>) ||
                            (i.bar &&
                                <BarInformation bar={i}/>) ||
                            (i.image &&
                                <ImageInformation image={i}/>) ||
                        <Information info={i}/>
                    }
                </div>
            )}
        </a>
    }
}