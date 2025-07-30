import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import CardList from "./Components/Cards/CardList";

function App() {

  return (
    <div className="App">
        <Navbar />
        <Header/>
        <CardList/>



    </div>
  );
}

export default App;
