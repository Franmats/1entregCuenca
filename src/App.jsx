import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//Router
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// React Toastify
import { ToastContainer } from 'react-toastify';
//Components
import {NavBar} from './components/NavBar/NavBar.jsx';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
//Firebase
import { crearProductosEnBdd } from './firebase/firebase';
function App() {
  /* crearProductosEnBdd() */
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar /> 
        <ToastContainer />
        <Routes> 
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/category/:category' element={<ItemListContainer/>}/> 
            <Route path='/product/:id' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/> 
            <Route path='/checkout' element={<Checkout/>}/> 

            <Route path='*' element={<h1>404 Not Found</h1>}/> 

        </Routes>   
      </BrowserRouter>
    </div>

  );
}

export default App;
