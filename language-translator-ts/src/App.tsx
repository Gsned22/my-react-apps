import React from 'react';
import './App.css';
import {useState} from 'react'
import searchImages from './Api'
import SearchBar from './components/SearchBar';

function App() {
  const [term, setTerm] = useState([]);
  const handleSubmit = async (term: any) => {
    const result = await searchImages(term);
    setTerm(result)
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>

    </div>
  );
}

export default App;
