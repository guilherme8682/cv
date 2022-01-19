import React, { Component, CSSProperties } from 'react'
import { Curriculum } from './Components/Curiculum'
import { HeaderCV } from './Components/HeaderCV';
import { myBlue, backGray } from './Components/Styles';
import { PrintButton } from './PrintButton';

const container: CSSProperties = {
  height: '100%',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
const background: CSSProperties = {
  backgroundColor: myBlue,
  width: '100%',
  height: '250px',
  zIndex: -1,
  position: 'fixed'
}
const paper: CSSProperties = {
  backgroundColor: backGray,
  zIndex: -2,
  position: 'fixed',
  width: '100%',
  margin: 'auto',
  height: '100%'

}

export default class Home extends Component {
  render() {

    return <div>
      <div style={container} id='cv-page'>
        <HeaderCV/>
        <div style={background}></div>
        <div style={paper}></div>
        <Curriculum />
      </div>
      <PrintButton />
    </div>
  }
}