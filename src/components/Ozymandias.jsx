import React, { Component } from 'react'
import ozymandias from './data/ozymandias'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontWeight: 300
}

export default class Ozymandias extends Component {

  renderLine(line){
    return (
      <p key={line}>{line}</p>
    )
  }

  render(){
    const { lines } = ozymandias
    return (
      <div style={style}>
        <div>OZYMANDIAS</div>
        <div>Percy Bysshe Shelley</div>
        <br />
        {lines.map(this.renderLine)}
      </div>
    )
  }
}