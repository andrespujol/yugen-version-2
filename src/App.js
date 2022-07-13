import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <header className="App-header">
      
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
      </Routes>
    </header>
  );
}

export default App;
