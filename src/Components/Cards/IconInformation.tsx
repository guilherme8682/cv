import React, { Component, CSSProperties } from 'react';
import { Information as InfoData } from '../../Data/CV';

const iconContent: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    // gridGap: '1em'
};
const icon: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
}
const value: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
}
export class IconInformation extends Component<{
    icon: InfoData;
}> {
    render() {
        const i = this.props.icon;
        return <div style={iconContent}>
            <div style={icon}>
                <img src={i.icon!.path} style={{ width: (i.icon!.size || 40) + 'px' }} />
            </div>
            <div style={value}>
                {i.value}
            </div>
        </div>;
    }
}
