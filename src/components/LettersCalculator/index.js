// Write your code here.
import {Component} from 'react'

import './index.css'
class LettersCalculator extends Component {
  state = {
    inputCount: '',
  }
  onChangeInputText = event => {
    ///const {value} = event.target
    //// this.setState({inputCount: value})
    this.setState({inputCount: event.target.value})
  }
  render() {
    const {inputCount} = this.state
    return (
      <div className="app-container">
        <div className="data-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="label" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            onChange={this.onChangeInputText}
          />
          <div>
            <p className="letters-count">No.of letters: {inputCount.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
