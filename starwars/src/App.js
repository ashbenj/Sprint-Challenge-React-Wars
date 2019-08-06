import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react' 
import CharacterList from './components/CharacterList'
import axios from 'axios'
import './App.css';

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect( () => {
    axios
    .get('https://swapi.co/api/people')
    .then(res => {
      console.log('List Data',res.data.results)
      setCharacterList(res.data.results)
    })
  }, [])
  return (
    <div className="App">
      <Header as="h1" className="Header">React Wars</Header>
      <CharacterList characters={characterList}/>
    </div>
  );
}
export default App