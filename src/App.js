import React, {Component} from "react";
import './App.scss';
import Github_404 from './demos/github-404/project.js';
import Image_upload from './demos/image-upload/project.js';
import Clock from './demos/Clock/project.js';
import Example from './demos/Redux-sample/Project'
// import Context_api from './demos/context_api/project'
// import {Container, Sidebar, Content, Logo, LogoContainer} from './App-style';
// import logo from './assets/logo.svg';
// import Modal from './components/widgets/Modal/Modal';

const App = () =>{
  return(
    <div className="main-container">
      <section className="app">    
        <Example />      
      </section>
      <section className="app-dsec">
      
      </section>
    </div>
  )
}
 
export default App;




