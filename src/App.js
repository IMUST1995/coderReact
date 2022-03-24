/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; */
import './App.css';
import NavBar from './components/NavBar'
import Title from './components/Title/Title';
import Products from './components/Products/Products'

function App() {
  return (
      <div>
        <NavBar/>
        <Title>
          <h1 className='title'>Tienda</h1>
        </Title>
        <Products/>
      </div>
  ); 
}

export default App;
