import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currencies: ['USD', 'AUD', 'SGD', 'PHP', 'EUR'],
        base: 'USD',
        amount: '',
        convertTo: 'EUR',
        result: '',
        date: ''
    }
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>1 USD is equivalent to</h5>
              <h2>1.87 EUR</h2>
              <p>As of 2019/1/2</p>
              <div className="row">
                <div className="col-sm-10">
                  <form className="form-inline mb-4">
                    <input className="form-control form-control-lg mx-3" />
                    <select className="form-control form-control-lg">
                      <option>Option 1</option>
                    </select>
                  </form>
                  <form className="form-inline mb-4">
                    <input className="form-control form-control-lg mx-3" />
                    <select className="form-control form-control-lg">
                      <option>Option 1</option>
                    </select>
                  </form>
                </div>

                <div className="col-sm-2 align-self-center">
                  <h1 className="swap">&#8595;&#8593;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
