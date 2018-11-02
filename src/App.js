import React, {Component} from "react";
import './App.scss';
import Github_404 from './demos/github-404/project.js';
// import {Container, Sidebar, Content, Logo, LogoContainer} from './App-style';
// import logo from './assets/logo.svg';
// import Modal from './components/widgets/Modal/Modal';

const App = () =>{
  return(
    <div className="main-container">
      <section className="app">
        <Github_404 />
      </section>
      <section className="app-dsec">
      
      </section>
    </div>
  )
}
 
export default App;




