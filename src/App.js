/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React,{useState} from 'react';
import './App.css';

const App=()=>{
 

  const [result,setResult]=useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

    const clearDisplay=()=>{
      setResult("");

  }

  const backspace=()=>{
    setResult(result.slice(0,result.length - 1))
  }

  const calculate=()=>{
    setResult(eval(result));
  }


  return (

    <div className="calci">
      <h1><i>Calculator</i></h1>
      <input type = "text" placeholder="0" id="answer"  value={result}/>
      <input type="button" value="(" className="button"  onClick={clickHandler}/>
      <input type="button" value="CE" className="button" onClick={backspace}/>
      <input type="button" value=")" className="button" onClick={clickHandler}/>
      <input type="button" value="C" className="button" onClick={clearDisplay}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>
      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="=" className="button" onClick={calculate}/>
      <input type="button" value="/" className="button" onClick={clickHandler}/>

    
        </div>
  )
  
}

export default App;

