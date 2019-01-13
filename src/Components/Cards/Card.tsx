import React, { Component, CSSProperties } from "react";
import { Group } from './Group'
import { Card as CardData } from "../../Data/CV";

const padding = '1.2em'
const border = 'solid 1px rgb(208, 208, 208)'
const radius = '5px'
const container: CSSProperties = {
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: radius
}
const title: CSSProperties = {
    borderRadius: `${radius} ${radius} 0 0`,
    borderBottom: border,
    padding: '1em',
    fontSize: '20px'
}
const content: CSSProperties = {
    padding,

    display: 'grid',
    gridGap: '1em'
}
const subContent: CSSProperties = {
    borderTop: border,
    padding
}

export class Card extends Component<{card: CardData}>{
    render(){
        const c = this.props.card
        return (
            <div style={{...c.style, ...container}}>
                {
                    c.title &&
                        <div style={{...title, ...c.title.style}}>
                            {c.title.value}
                        </div>
                }
                <div style={content}>
                    {c.component.map(g => <Group info={g}/>)}
                </div>                
                {
                    c.subComponent &&
                        <div style={subContent}>
                            <div>
                                {c.subComponent.map(g => <Group info={g}/>)}
                            </div>
                        </div>
                }
            </div>
        )
    }
}