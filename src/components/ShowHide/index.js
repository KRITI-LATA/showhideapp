// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstCard = () => {
    const {firstCard} = this.state
    this.setState(() => ({firstCard: !firstCard}))
  }

  lastCard = () => {
    const {lastCard} = this.state
    this.setState(() => ({lastCard: !lastCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="card-container">
          <div className="button-container">
            <button type="button" className="button" onClick={this.firstCard}>
              Show/Hide Firstname
            </button>
            {this.firstCard ? <p className="para-text">Joe</p> : ''}
          </div>
          <div className="button-container">
            <button type="button" className="button" onClick={this.lastCard}>
              Show/Hide Lastname
            </button>
            {this.lastCard ? <p className="para-text">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
