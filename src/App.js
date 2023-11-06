import Home from "./Home";
import Abbos from "./Abbos";
import './style.css';
import { useState } from "react";
import Work  from "./Work";

function App() {
  const [num, setNum] = useState(0);
  const [abbos, setAbbos] = useState('Ulmasbaev');
  const [text, setText] = useState("Hello World!");

  return (
    <div>

      <h1>{num}</h1>
   

      {/* <Abbos text={text} abbos={abbos} setAbbos={setAbbos}/> */}
      {/* <Home text={text} setText={setText}/> */}
      <Work num={num} setNum={setNum}/>

     {/* <h1> Hello World</h1>
      
      <Home />
      <Abbos/> */}
    </div>
  );
}

export default App;









