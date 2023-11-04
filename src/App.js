import logo from "./logo.svg";
import "./App.css";
import Button from "./Button"; //cuando exporto por default, como si importara todo el documento
// import {Button} from './Button' //cuando no exporto por default, sino exporto cada una de las funciones

function App() {
const valueBtn = 'Click'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola React</p>
        <Button valueBtn={valueBtn}></Button>
      </header>
    </div>
  );
}

export default App;
