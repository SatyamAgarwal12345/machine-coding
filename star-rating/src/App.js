import {useState} from 'react'
function App() {
  const [starCount, setStarCount] = useState([1,2,3,4,5])
  const [initialCount, setInitialCount] = useState(2)
  const clickHandler =(val)=>{
       setInitialCount(val)
  }
  return (
    <div >
      {starCount.map((val)=>
       val<=initialCount ? <button onClick={()=>{clickHandler(val)}}>✨</button>
         : <button onClick={()=>{clickHandler(val)}}> ⭐</button>
      )}
      
    </div>
  );
}

export default App;
