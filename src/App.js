import React, {Component} from "react";
import {Container, Sidebar, Content, Logo, LogoContainer} from './App-style';
import logo from './assets/logo.svg';

const App = () =>{
  return(
    <Container>
      <Sidebar>
          <LogoContainer>
            <Logo src={logo}/>
          </LogoContainer>
      </Sidebar>
      <Content>

      </Content>
    </Container>
  )
}
 
export default App;




