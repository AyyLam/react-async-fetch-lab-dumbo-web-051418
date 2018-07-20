// create your App component here
import React from 'react';
import Button from './components/Button.js';
import ExampleComponent from './components/ExampleComponent.js';
import Greeting from './components/Greeting.js';

class App extends React.Component {

  state = {
    peopleInSpace:[]
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        }, () => console.log(this.state.peopleInSpace))
      })
  }

  render() {
    return (
      <div>
        <Button />
        <ExampleComponent />
        <Greeting />
      </div>
    )
  }


}

export default App
