import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Card from './Card';
import data from './data';
import  ReactDOM  from 'react';

function App() {

  const cards = data.map(item =>{
    return(
      <Card
    
      key = {item.id}  
      item = {item}
        
      
      />
    )
  })


  return (
    <div className="App">
      <NavBar/>
      {cards}
     
     
    </div>
  );
}

export default App;
