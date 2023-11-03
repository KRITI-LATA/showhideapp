// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isfirstCard: '', isLastCard: ''}

  showFirstName = () => {
    const {isfirstCard} = this.state
    if (isfirstCard === '') {
      return (
        <div className="container">
          <p className="para-text">Joe</p>
        </div>
      )
    }
    return this.setState({isfirstCard: ''})
  }

  showLastName = () => {
    const {isLastCard} = this.state
    if (isLastCard === '') {
      return (
        <div className="container">
          <p className="para-text">Jonas</p>
        </div>
      )
    }
    return this.setState({isLastCard: ''})
  }

  render() {
    const {isfirstCard, isLastCard} = this.state

    return (
      <div className="bg-container">
        <h1 className="headingText">Show/Hide</h1>
        <div className="card-container">
          <div>
            <button
              type="button"
              className="btn-show"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isfirstCard}
          </div>
          <div>
            <button
              type="button"
              className="btn-show"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastCard}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
