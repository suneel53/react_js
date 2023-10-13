// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onacc = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => {
        console.log('acceleration applied')
        return {count: prevState.count + 10}
      })
    }
  }

  onbrake = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => {
        console.log('brake applied')
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {imgUrl} = this.props
    const {count} = this.state
    return (
      <div className="cont">
        <h1>Speedometer</h1>
        <img src={imgUrl} alt="speedometer" />
        <h1>Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="but1" onClick={this.onacc}>
            Accelerate
          </button>
          <button type="button" className="but2" onClick={this.onbrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
