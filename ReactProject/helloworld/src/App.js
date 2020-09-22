import React, {Component} from 'react';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import GreetNew from './components/GreetNew';


class App extends Component {
  render(){
    return (      
      <div className="App">
        <Greet/>
        <Welcome/>
        <Message/>
        <Counter/>
        <GreetNew name="Rashmi" herorname="Shetty"/>
        {/* <MyComponent/> */}
        {/* <Greet name="Rashmi"/>
        <Greet name="Meghana"/>
        <Greet name="Ana"/> */}
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
