import React, {useState} from "react";
import "./App.css";

function App () {
  const [score,setScore]=useState(0);
  const [increment,setIncrement]=useState(1)
  const increaseScore=()=> setScore(prevscore =>prevscore + increment);
  const increaseIncrement =()=>{
    if(score>10){
      setScore(prevscore => prevscore-10);
      setIncrement(prevIncrement => prevIncrement +1)
    }else{
      alert('Not Enough Points')
    }
  }
    return (
      <main>
       <h1>Current Score {score}</h1>
       <button onClick={()=>increaseScore()}> +{increment} </button><br />
       <button onClick={()=> increaseIncrement()}>Pay 10 pts to change +{increment} to +{increment + 1}</button>
      </main>
    );
}

export default App;
