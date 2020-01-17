import React, { useEffect, useState } from 'react';
import Recipe from './recipe'
import './App.css';

const App = () => {

  const APP_ID = 'efd1dd1a';
  const KEY = 'eb51cc7f5d25e0ba4b7478ed049d420d';

  const [recipes, setrecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('coffee');

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${keyword}&app_id=${APP_ID}&app_key=${KEY}`);
      const data = await response.json();
      setrecipes(data.hits);
      console.log(data.hits);
    }
    getApi();
  }, [keyword])



  const getSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getKeyword = e => {
    e.preventDefault();
    setKeyword(search);
    setSearch('');
  }


  return (
    <div className="App">
      <h1>Hello Recipe!</h1>
      <form onSubmit={getKeyword} className='search-form'>
        <input type="text" className='search-bar' value={search} onChange={getSearch} />
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
