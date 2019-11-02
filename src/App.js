import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './Product-Card';


function Img(flag) {
  if (flag) {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    )
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
};

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      name: "Pesho"
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Img flag={true} />
          <ProductCard />
          {this.state.name}
        </header>
      </div>
    );
  }
}

export default App;
