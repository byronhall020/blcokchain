import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btcAddress: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <>
        <input
          id="btcAddress"
          type="text"
          value={this.state.btcAddress}
          placeholder="btc address"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <div>
          <span id="stuff"></span>
        </div>
      </>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
      }
    };
    xhttp.open("GET", "https://www.blockchain.com/api/q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj?confirmations=6", true);
    xhttp.send();
  }
}

export default App;
