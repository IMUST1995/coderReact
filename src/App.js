/* import { useEffect, useState } from 'react'; */
import './App.css';
import NavBar from './components/NavBar'
import Title from './components/Title/Title';
import Products from './components/Products/Products'

function App() {

  /* const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);

  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  const getData = async () => {
    const result = await fetch(URL);
    const info = await result.json();
    setData(info.results);
    setLoading(false);
  };

  useEffect( () => {
    setLoading(true);
    setTimeout(() => getData(), 3000);
  }, []); */


  /* useEffect( () => {
    getUser()
  }, [])
  function getUser(){
    const URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(URL)
    .then( (response) => {
       return response.json()
    })
    .then( (users) =>{
      console.log('lista', users)
    })
  }; */


  return (
    <>
      <div>
        <NavBar/>
        <Title>
          <h1 className='title'>Tienda</h1>
        </Title>
        <Products/>
      </div>
      
      {/* { loading ? 
        ('loading...') 
        : 
        (<ol>
          {data.map((pokemon, i) => (
            <li key={i}>
              {pokemon.name}
              
            </li>
          ))}
        </ol>)} */}
    </>
  ); 
}

export default App;
