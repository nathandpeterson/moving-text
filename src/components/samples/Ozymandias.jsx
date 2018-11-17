import React, { Component, Fragment } from 'react'
import ozymandias from '../texts/ozymandias'

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  fontWeight: 300,
  marginLeft: '7rem',
  width: '60%'
}

const poemTitleStyle = {
  fontSize: '1.5rem',
  margin: '.5rem 0'
}

const lineStyle= {
  margin: 0,
  letterSpacing: .5
}

const invisibleLineStyle = {
  ...lineStyle,
  opacity: 0
}

const layoutStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export default class Ozymandias extends Component {

  state = {
    currentLine : 0,
    lines: []
  }

  componentDidMount(){
    window.addEventListener('keypress', this.handleKeyPress)
    const { lines } = ozymandias
    const formattedLines = lines.map((text, index) => {
      return {index, text, classNames: ''}
    })
    this.setState({lines: formattedLines})
  }

  componentWillUnmount(){
    window.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = ({key}) => {
    if(key === 'l'){
      this.handleForward()
    }
  }

  handleForward = () => {
    const [...linesCopy] = this.state.lines
    const { ...selectedLine } = linesCopy[this.state.currentLine]
    selectedLine.classNames = 'animated fadeInLeft'
    linesCopy[this.state.currentLine] = selectedLine
    this.setState({lines: linesCopy, currentLine: this.state.currentLine + 1})
    this.forceUpdate()
  }

  calculateOpacity = (index) => {
    const { currentLine } = this.state
    if (currentLine === 0) {
      return invisibleLineStyle
    } else return currentLine > index ?
      lineStyle : invisibleLineStyle
  }

  renderLine = ({text, classNames, index}) => {
    return (
      <p  style={this.calculateOpacity(index)}
          className={classNames}
          key={text}>
        {text}
      </p>
    )
  }

  render(){
    const { lines, currentLine } = this.state
    return (
      <div style={{layoutStyle}}>
        <div style={style}>
          <div  style={poemTitleStyle}
          >Ozymandias</div>
          <div>Percy Bysshe Shelley</div>
          <br />
          {currentLine === 0 && 
          <h4 className='animated flash' style={poemTitleStyle}>
            Press the <span>L</span> key to reveal a line
          </h4>}
          {lines.map(this.renderLine)}
        </div>
      </div>
      
    )
  }
}