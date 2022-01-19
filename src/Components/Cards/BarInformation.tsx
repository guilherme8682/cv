import React, { Component, CSSProperties } from 'react';
import { Information as InfoData } from '../../Data/CV';
import { myBlue, lightGray, white } from '../Styles';

const barContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};
const bar: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'minmax(10px, 1.6fr) minmax(10px, 1.2fr) minmax(10px, 1fr)',
    gridGap: '1em'
};
export class BarInformation extends Component<{
    bar: InfoData;
}> {
    render() {
        const b = this.props.bar;
        return <div style={barContainer}>
            {b.bar!.map((b, i) => <div style={bar} key={i}>
                <div>{b.name}</div>
                <Bar size={b.size} />
                <div style={{color: lightGray, textAlign: 'right', fontStyle: 'italic'}}>
                    {b.description}
                </div>
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
                backgroundColor: white,
                width: this.props.size + '%',
                borderRadius: '3px'
            }}>
                <br/>
            </div>
        </div>;
    }
}
