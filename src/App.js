import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/header'
import Main from './components/main'
import Menu from './components/menu'

const url = process.env.PUBLIC_URL + '/img/background.jpg';

const HeaderWrapper = styled.header `
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div `
  height: 89px;
  padding-top:20px;
`

const MeinWrapper = styled.main `
  height: 600px;
  padding-top:130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper> 
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MeinWrapper>
          <Grid>
            <Main />
          </Grid>
        </MeinWrapper>
      </div>
    );
  }
}


export default App;
