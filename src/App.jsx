import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import {Navbar} from './components/Navbar/Navbar.jsx';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar /> 
        <Routes> 
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/category/:category' element={<ItemListContainer/>}/> 
            <Route path='/product/:name' element={<ItemDetailContainer/>}/> 
          </Routes> 
      </BrowserRouter>
      

    </div>

  );
}

export default App;
