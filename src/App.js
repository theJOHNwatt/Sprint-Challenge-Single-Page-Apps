import React from "react";
import { Route, Link} from 'react-router-dom'
import SearchForm from "./components/SearchForm";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage'
import Header from "./components/Header.js";


export default function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/list' component={CharacterList}/>
      <Route path="/search" component={SearchForm} />
    </div>
  );
}

