import React, { Component, CSSProperties } from 'react';
import { Information as InfoData } from '../../Data/CV';
import { myBlue, lightGray } from '../Styles';

const barContainer: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1em'
};
export class BarInformation extends Component<{
    bar: InfoData;
}> {
    render() {
        const b = this.props.bar;
        return <div style={barContainer}>
            {b.bar!.map(bar => <div style={barContainer}>
                <div>{bar.name}</div>
                <div><Bar size={bar.size} /></div>
            </div>)}
        </div>;
    }
}
class Bar extends Component<{
    size: number;
}> {
    render() {
        return <div style={{
            width: '100%',
            backgroundColor: lightGray,
            borderRadius: '3px'
        }}>
            <div style={{
                backgroundColor: myBlue,
                width: this.props.size + '%',
                borderRadius: '3px'
            }}>
                <br />
            </div>
        </div>;
    }
}
