/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; */
import './App.css';
import NavBar from './components/NavBar'
import Title from './components/Title/Title';
import Products from './components/Products/Products'
/* import Counter from './components/Contador' */

function App() {
  return (
      <div>
        <NavBar/>
        <Title>
          <h1 className='title'>Tienda</h1>
        </Title>
        <Products/>
        <p>hola profe, intente comprar mas de 10 items, se que me faltan algunos detalles como el stock y demas. prometo mejorar para la proxima</p>
      </div>
  ); 
}

export default App;
