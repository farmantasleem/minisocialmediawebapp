import { useState } from 'react';
import './App.css';

function App() {
  const[av,setav]=useState("https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg")
  const[prev,setprev]=useState(0)
  function handleScroll(event){
    console.log("scroll top",event.target.scrollTop)
    if(event.target.scrollTop>=100){
      event.target.scrollTop=prev+300
      setprev(300+prev)
      
    
    }
  }
  function fixPicture(){

  }
  return (
    <div className="App">
      <a href="#about">About page</a>
          <div id='container' onScroll={handleScroll}>

          <img src={av} id='center'/>
          <img src='https://thumbs.dreamstime.com/b/demo-text-businessman-dark-vintage-background-108609906.jpg'/>
          <img src={av} id='center'/>
          <img src='https://thumbs.dreamstime.com/b/demo-text-businessman-dark-vintage-background-108609906.jpg'/>
          <img src={av} id='center'/>
          <img src='https://thumbs.dreamstime.com/b/demo-text-businessman-dark-vintage-background-108609906.jpg'/>
          <img src={av} id='center'/>
          <img src='https://thumbs.dreamstime.com/b/demo-text-businessman-dark-vintage-background-108609906.jpg'/>
          <img src={av} id='center'/>
          <img src='https://thumbs.dreamstime.com/b/demo-text-businessman-dark-vintage-background-108609906.jpg'/>
          </div>
          <div>
          
          </div>
         
    </div>
    
  );
}

export default App;
