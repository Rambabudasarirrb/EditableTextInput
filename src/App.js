import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {userInput: '', isSave: true}

  onSave = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  changeUsername = event => {
    this.setState({userInput: event.target.value})
  }

  renderUserInput = () => {
    const {userInput} = this.state
    return (
      <input
        type="text"
        value={userInput}
        className="input-filed"
        onChange={this.changeUsername}
      />
    )
  }

  render() {
    const {userInput, isSave} = this.state
    const inputField = this.renderUserInput()
    const ButtonText = isSave ? 'Save' : 'Edit'
    const saveInput = isSave ? inputField : userInput

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="title">Editable Text Input</h1>
          <div className="input-container">
            <p>{saveInput}</p>
            <button type="button" className="button" onClick={this.onSave}>
              {ButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
