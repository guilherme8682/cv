import React, { Component, CSSProperties } from 'react'
import { Card } from './Cards/Card';
import { guilherme as pt_cv} from '../Data/Guilherme20220113'
import { guilherme as en_cv} from '../Data/Guilherme20220113'
import { observer } from "mobx-react"
import {observable, action} from "mobx";
import { CV } from '../Data/CV';

class Store{
    @observable cv = pt_cv as CV

    @action alternate(){
        this.cv = this.cv === pt_cv ? en_cv : pt_cv
    }
}

export const store = new Store()


;(window as any).store = store

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

type CardList = typeof store.cv.card

@observer
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
        const cv = store.cv
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
