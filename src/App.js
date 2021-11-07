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
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>{amount} {base} is equivalent to</h5>
              <h2>{result} {convertTo}</h2>
              <p>As of {date}</p>
              <div className="row">
                <div className="col-sm-10">
                  <form className="form-inline mb-4">
                    <input className="form-control form-control-lg mx-3" />
                    <select name="base" value={base} className="form-control form-control-lg">
                      {currencies.map((currency) => {
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      })}
                    </select>
                  </form>
                  <form className="form-inline mb-4">
                    <input className="form-control form-control-lg mx-3" />
                    <select name="convertTo" value={convertTo} className="form-control form-control-lg">
                      {currencies.map((currency) => {
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      })}
                    </select>
                  </form>
                </div>

                <div className="col-sm-2 align-self-center">
                  <h1 className="swap">&#8595;&#8593;</h1>
                </div>
              </div> {/* End of row */}
            </div> {/* End of card */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
