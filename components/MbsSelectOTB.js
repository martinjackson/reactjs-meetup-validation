

import React from 'react';
import _ from 'lodash';

import endpt_info from '../endpt_info.js';


class MbsSelectOTB extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
    this.state.otbList = _.keys( endpt_info.param ).sort();
  }

  render() {
    var otbList = this.state.otbList;
    return <span>
               <select {...this.props} >
                 {otbList.map( el => <option key={el} value={el}>{el}</option>)}
               </select>
          </span>;
  }
}

export default MbsSelectOTB;
