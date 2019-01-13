import React, { Component, CSSProperties } from 'react';
import { Information as InfoData } from '../../Data/CV';

const iconContent: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridGap: '1em'
};
export class IconInformation extends Component<{
    icon: InfoData;
}> {
    render() {
        const i = this.props.icon;
        return <div style={iconContent}>
            <div>
                <img src={i.icon!.path} style={{ width: (i.icon!.size || 40) + 'px' }} />
            </div>
            <div>
                {i.value}
            </div>
        </div>;
    }
}
