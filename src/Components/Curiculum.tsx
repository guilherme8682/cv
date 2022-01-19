import React, { Component, CSSProperties } from 'react'
import { Card } from './Cards/Card';
import { guilherme as cv} from '../Data/Guilherme20220113'
import { HeaderCV } from './HeaderCV';

const padding = '1.5em'
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
        gridGap: '1.5em'
    }
}

const desktopColumns = '3.8fr 6.2fr'
const mobileColumns = '1fr'

type CardList = typeof cv.card

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
        const gridTemplateColumns = this.state.isDesktop ? desktopColumns : mobileColumns
        // const gridTemplateColumns = desktopColumns
        
        let cvLeft: CardList, cvRight: CardList;
        if(this.state.isDesktop){
            cvLeft = cv.card.filter(c => c.mainSide)
            cvRight = cv.card.filter(c => !c.mainSide)
        }else{
            cvLeft = cv.card
            cvRight = []
        }


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
