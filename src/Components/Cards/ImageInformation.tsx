import React, { Component, CSSProperties } from 'react';
import { Information as InfoData } from '../../Data/CV';

const imageContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px'
};
export class ImageInformation extends Component<{
    image: InfoData;
}> {
    render() {
        const i = this.props.image;
        return <div style={imageContent}>
            <img src={i.image!.path} style={{ width: (i.image!.size || 40) + 'px' }} />
            <div>{i.value}</div>
        </div>;
    }
}
