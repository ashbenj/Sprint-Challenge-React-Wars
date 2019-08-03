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
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const App = () => {

  return (
    <div className="App">
      <Header as="h1" className="Header">React Wars</Header>
      <CharacterList characters={characterList}/>
    </div>
  );
}
// export default App;