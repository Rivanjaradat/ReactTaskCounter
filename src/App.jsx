import { useState } from 'react'

import './App.css'
import Counter from './components/Counter/Counter'
function App() {
 
 useState();
  let [count,setCount]=useState(0);
 const changeCounter=()=>{
  setCount(count+1);
  
 };
    
 
  return(
<>
<button onClick={changeCounter}>Rivan Jaradat-{count}</button>
</>

  );
}

export default App;
