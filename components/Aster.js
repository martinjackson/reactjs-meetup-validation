import React from 'react';

import _ from 'lodash';

class Aster extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){  // reds 255,74,10    235,84,20
    var st = {color: 'rgb(255,255,255)', fontSize: '1.6em'};
    return <span style={st} title={this.props.msg}>*</span>
  }
}

export default Aster
