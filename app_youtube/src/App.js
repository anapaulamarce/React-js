import React, {useState} from 'react';
import './App.css';
import MyBody from './MyBody';

function App() {

  const [str, setStr] = useState('Ola Mundo');
  // useState(false);
  // useState(2);

  function handleClick(){
    setStr('Ola Paula');
  }


  return (
    <div className="App">  
      <h2>{str}</h2>
      <MyBody conteudo = "Body1" conteudo2="Paula"></MyBody> 
      <MyBody conteudo = "Body2"></MyBody> 
      <MyBody conteudo = "Body3"></MyBody> 
      <MyBody conteudo = "Body4"></MyBody> 
    </div>
  );

}

export default App;
