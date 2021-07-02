import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';



function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)


      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();

  }, [query])


  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={(q) => { setQuery(q) }}></Search>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
}

export default App;
