import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import AlphabetPage from "./pages/AlphabetPage";
import RegisterPage from "./pages/RegisterPage";
import NamePage from "./pages/NamePage";
import HomePage from "./pages/HomePage";

export default function App() {
  return(
    <div>
      <header>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/register'>register</Link>
          </li>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/name'>name</Link>
          </li>
          <li>
            <Link to='/alphabet'>Alhabet</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element = {<LoginPage/>}/>
          <Route path='/home' element = {<HomePage/>}/>
          <Route path='/register' element = {<RegisterPage/>}/>
          <Route path='/name' element = {<NamePage/>}/>
          <Route path='/alphabet' element = {<AlphabetPage/>}/>
        </Routes>

      </main>
    </div>
  )
}