import React from 'react';

import Err from './components/Aster';

class App extends React.Component {


  render(){

    return <div>Hello<Err msg='some msg'/>Hi<Err/>There</div>
  }
}

export default App
