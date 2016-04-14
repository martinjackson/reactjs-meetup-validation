import React from 'react';

class App extends React.Component {


  render(){

    var ast = {fill: 'red'}

    return <div>Hi
               <img src="Asterisk.svg" alt="asterisk" style={ast} />
               <img src="kiwi.svg" alt="kiwi standing on a disk" />
           </div>
  }
}

export default App
