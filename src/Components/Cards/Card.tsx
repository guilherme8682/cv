import React, { Component, CSSProperties } from "react";
import { Group } from './Group'
import { Card as CardData } from "../../Data/CV";

const padding = '1.2em 1.8em 1.8em 1.8em'
export const border = 'solid 1px rgb(208, 208, 208)'
const radius = '0px'
const container: CSSProperties = {
    // boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',

    // borderRadius: '50px',
    // background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    // boxShadow:  '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',


    borderRadius: radius,
    textDecoration: 'none',
    transition: 'all 0.3s 0s ease'
}
const containerHover: CSSProperties = {
    textDecoration: 'underline',
    transform: 'scale(1.08)',
}
const title: CSSProperties = {
    borderRadius: `${radius} ${radius} 0 0`,
    borderBottom: border,
    padding: '.6em 1.5em',
    fontSize: '20px'
}
const content: CSSProperties = {
    padding,

    display: 'grid',
    gridGap: '1em'
}
const subContent: CSSProperties = {
    borderTop: border,
    padding,
    
    display: 'grid',
    gridGap: '1em'
}

export class Card extends Component<{card: CardData}>{
    
    state = {
        isHover: false
    }

    render(){
        const c = this.props.card
        return (
            <a 
                style={{
                    ...c.style, 
                    ...container, 
                    ...(this.state.isHover && c.link ? containerHover : {})
                }} 
                href={c.link}
                target="_blank"
                onMouseEnter={() => { this.setState({isHover: true}) }}
                onMouseLeave={() => { this.setState({isHover: false}) }}
                >
                {
                    c.title &&
                        <div style={{...title, ...c.title.style}}>
                            {c.title.value}
                        </div>
                }
                <div style={content}>
                    {c.component.map((g, i) => <Group info={g} key={i}/>)}
                </div>                
                {
                    c.subComponent &&
                        <div style={subContent}>
                            {c.subComponent.map((g, i) => <Group info={g} key={i}/>)}
                        </div>
                }
            </a>
        )
    }
}