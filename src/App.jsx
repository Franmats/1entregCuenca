import './App.css';
import { Navbar } from './components/NavBar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx'
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"PRODUCTOS"} />
    </div>
  );
}

export default App;
