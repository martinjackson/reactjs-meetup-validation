import React from 'react';

import MbsSelectOTB    from './MbsSelectOTB.js';

class Example5 extends React.Component {

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
      valid.from     = dPat.test(this.state.from) ? '' : 'bad date';
      valid.to       = dPat.test(this.state.to) ? '' : 'bad date';
      valid.otb      = this.state.otb != 'CPR' ? '' : 'CPR no allowed';
      valid.subjects =  /^[A-Z0-9]*$/.test(this.state.subjects) ? '' : 'no spaces allowed';
      valid.cost     = fPat.test(this.state.cost) ? '' : 'only numbers and decimal';
      valid.qnt      = iPat.test(this.state.qnt) ? '' : 'only whole numbers';

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

  table(obj) {
    var keys = Object.keys(obj);

    return      <table border="1">
                    <thead><tr>{keys.map( k => <th key={k}>{k}</th>)}</tr></thead>
                    <tbody><tr>{keys.map( k => <td key={k}>{obj[k]}</td>)}</tr></tbody>
                  </table>
  }

  render(){
    var red = {color: 'rgb(255,255,255)', fontSize: '1.6em'};

    var valid = this.checkValid();
    var vs = (name) => (valid[name].length == 0) ? <span></span>: <span style={red} title={valid[name]}>*</span>;

    return <div>
            <h1>Example 5</h1>
            <div onChange={this.handleChange} >
              From: <input       name="from"     value={this.state.from} placeholder="MM/DD/YYYY" />{vs('from')}
              To: <input         name="to"       value={this.state.to}   placeholder="MM/DD/YYYY" />{vs('to')}
              OTB: <MbsSelectOTB name="otb"      value={this.state.otb} />                          {vs('otb')}       <br />
              Subjects: <input   name="subjects" value={this.state.subjects} />                     {vs('subjects')}  <br />
              Cost: <input       name="cost"     value={this.state.cost} />                         {vs('cost')}
              Quantity: <input   name="qnt"      value={this.state.qnt} />                          {vs('qnt')}       <br />

              <button type="button" onClick={this.submitData}>Submit</button>
              <button type="button" onClick={this.clear}>Clear</button>
              <button type="button" onClick={this.cannedReport}>Daily Report</button>
              <hr />
              {this.table(this.state)}
              </div>

           </div>
  }
}

export default Example5
