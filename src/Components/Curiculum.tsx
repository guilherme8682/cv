import React, { Component, CSSProperties } from 'react'
import { Card } from './Cards/Card';
import { guilherme12102020 as cv} from '../Data/Guilherme12102020'

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
const cvLeft = cv.card.slice(0, cv.card.length / 2 | 0)
const cvRight = cv.card.slice(cv.card.length / 2 | 0)

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
        const gridTemplateColumns = this.state.isDesktop ? '4fr 6fr' : '1fr'
        return <div style={{...style.container, gridTemplateColumns}}>
            <div style={style.side}>
                {cvLeft.map(c => <Card card={c}/>)}
            </div>
            <div style={style.side}>
                {cvRight.map(c => <Card card={c}/>)}
            </div>
        </div>
  }
}
