import React, { Component, CSSProperties } from 'react'
import { Card } from './Cards/Card';
import { Guilherme20211222 as cv} from '../Data/Guilherme20211222'

const padding = '1.8em'
const style: {[id: string]: CSSProperties} = {
    container: {
        padding,
        maxWidth: '800px',
    
        margin: 'auto',
        zIndex: 2,
        display: 'grid',
        gridGap: padding,
    },
    side: {
        display: 'grid',
        gridGap: '2em'
    }
}
const cvLeft = cv.card.filter(c => c.mainSide)
const cvRight = cv.card.filter(c => !c.mainSide)



export class Curriculum extends Component {
    
    state = {
        isDesktop: false
    }
    componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }
  
    updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth > 650 });
    }

    render() {
        const gridTemplateColumns = this.state.isDesktop ? '3.8fr 6.2fr' : '1fr'
        return <div style={{...style.container, gridTemplateColumns}}>
            <div style={style.side}>
                {cvLeft.map((c, i) => <Card card={c} key={i}/>)}
            </div>
            <div style={style.side}>
                {cvRight.map((c, i) => <Card card={c} key={i}/>)}
            </div>
        </div>
  }
}
