import React, {Component} from "react";
import {Container, Sidebar, Content, Logo, LogoContainer} from './App-style';
import logo from './assets/logo.svg';
import Modal from './components/widgets/Modal/Modal';

const App = () =>{
  return(
    <Container>
      <Sidebar>
          <LogoContainer>
            <Logo src={logo}/>
          </LogoContainer>
      </Sidebar>
      <Content>
          <Modal />
      </Content>
    </Container>
  )
}
 
export default App;




