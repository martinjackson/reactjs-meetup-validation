import React from 'react';

import MbsSelectOTB    from './MbsSelectOTB.js';

class Example1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      from: '',
      to: '',
      otb: '',
      subjects:'M',
      cost: 14.58,
      qnt: 3,
      newInfo: false
      };

       this.checkValid   = this.checkValid.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.clear        = this.clear.bind(this);
       this.cannedReport = this.cannedReport.bind(this);
  }

  checkValid() {
      var dPat = /(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)/;
      var fPat = /^(\d+|\d+\.\d{0,2})$/;
      var iPat = /^\d+$/;

      var valid = {};
      valid.from     = dPat.test(this.state.from);
      valid.to       = dPat.test(this.state.to);
      valid.otb      = true;
      valid.subjects =  /^[A-Z0-9]*$/.test(this.state.subjects);
      valid.cost     = fPat.test(this.state.cost);
      valid.qnt      = iPat.test(this.state.qnt);

      return valid;
    }

    handleChange(e) {
          e.preventDefault();

          var stateChange = {};
          stateChange[e.target.name] = e.target.value;
          stateChange.newInfo = true;

          this.setState(stateChange);
    }

    clear() {
         this.setState({from: '',to: '',otb: '',subjects:'', cost:'', qnt:''});
      }

    cannedReport() {
          var d = new Date(),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

          this.setState({
             from: [month, 1, year].join('/'),
             to: [month, day, year].join('/'),
             newInfo: true
           });
      }

  render(){

    var valid = this.checkValid();

    return <div>
            <h1>Example 1</h1>
            <div>
              From: <input name="from" className={valid['from']?'valid':'invalid'} onChange={this.handleChange} value={this.state.from} placeholder="MM/DD/YYYY" />
              To: <input   name="to"   className={valid['to']?'valid':'invalid'}   onChange={this.handleChange} value={this.state.to}   placeholder="MM/DD/YYYY" />
              OTB: <MbsSelectOTB name="otb"  className={valid['otb']?'valid':'invalid'}  onChange={this.handleChange} value={this.state.otb} />
              Subject Patterns: <input name="subjects" className={valid['subjects']?'valid':'invalid'} onChange={this.handleChange} value={this.state.subjects} />
              <br />
              Cost: <input name="cost" className={valid['cost']?'valid':'invalid'} onChange={this.handleChange} value={this.state.cost} />
              Quantity: <input name="qnt" className={valid['qnt']?'valid':'invalid'} onChange={this.handleChange} value={this.state.qnt} />
              <br />

              <button type="button" onClick={this.submitData}>Submit</button>
              <button type="button" onClick={this.clear}>Clear</button>
              <button type="button" onClick={this.cannedReport}>Daily Report</button>
              <hr />
              </div>

           </div>
  }
}

export default Example1
