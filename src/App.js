import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { 
  Box,
  Heading,
  Button,
  Flex,
  Text,
  Link
} from 'rebass'

export default props =>
  <>
    <Flex
      px={2}
      color='white'
      bg='darkblue'
      alignItems='center'>
      <Text p={2} fontWeight='bold'>Farese</Text>
      <Box mx='auto' />
      <Link variant='nav' href='#!'>
        Home
      </Link>
      <Link variant='nav' href='#!'>
        About
      </Link>
      <Link variant='nav' href='#!'>
        Map
      </Link>
      <Link variant='nav' href='#!'>
        List
      </Link>
      <Link variant='nav' href='#!'>
        Legacy
      </Link>
    </Flex>
  </>

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
