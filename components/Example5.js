import React from 'react';

class Example1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return <div>
             <h1>Example 4</h1>
             <div>Hello<Err msg='some msg'/>Hi<Err/>There</div>
           </div>
  }
}

export default Example1
