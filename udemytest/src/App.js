import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './Components/Header'
import Search from './Components/Search';


const App = ({handleSubmit}) => {
  const [word,setWord] = useState('');
  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(word);
  }
  console.log(word)
  return (
    <div>
      <Header title = "Images Galley" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />

    </div>
  );
}

export default App;
