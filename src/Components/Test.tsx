import React, { Component } from 'react'

interface Prop{
    batata: number    
}
interface State{
    value: number    
}

export class Container extends Component {
    render(){
        return <Element batata={5}></Element>
    }
}

export class Element extends Component<Prop, State> {
    constructor(props: Prop){
        super(props)
    }
    render(){
        return <div></div>
    }
}

