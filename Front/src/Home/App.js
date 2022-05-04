import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
  return (
    <div className="App">
        <a href="" className="login">LOGIN</a>
        <h1>
            <img src="horizontallight.png" alt="Logo da livraria alexandria" className="logo"/>

        </h1>
        <input type="text" className="search" placeholder="Pesquisar livro"/>
        <br/>
        <button className="searchbutton"><img src="search.png" alt="Pesquisar" className="searchbuttonimg"/></button>
    </div>
  );
}



export default App;
