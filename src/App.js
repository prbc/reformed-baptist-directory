import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { 
  Box,
  Heading,
  Image,
  Flex,
  Text,
  Link
} from 'rebass'

const App = props => {
  return(
    <>
      <ThemeProvider
        theme={theme}>
        <Flex
          p={2}
          color='white'
          bg='primary'
          alignItems='center'>
          <Text
            p={2}
            fontWeight='bold'>
              Farese
          </Text>
          <Box mx='auto' />
          <Link
            variant='nav'
            href='/'
            px={2}
            color='white'>
              Home
          </Link>
          <Link
            variant='nav'
            href='/about'
            px={2}
            color='white'>
              About
          </Link>
          <Link
            variant='nav'
            href='/map'
            px={2}
            color='white'>
              Map
          </Link>
          <Link
            variant='nav'
            href='/list'
            px={2}
            color='white'>
              List
          </Link>
          <Link
            variant='nav'
            href='/legacy'
            px={2}
            color='white'>
              Legacy
          </Link>
        </Flex>

        <Flex
          color='white'
          bg='primary'
          p={4}>
          <Box
            p={3}>
            <Heading
              as='h1'
              color='white'
              textAlign='center'>
                Welcome to an online directory
            </Heading>
            <Heading
              as='h2'
              color='white'
              textAlign='center'>
                of Reformed Baptist churches
            </Heading>
          </Box>
        </Flex>

        <Flex
          bg='secondary'
          color='light'
          p={4}>
          <Box
            p={3}>
            <Heading
              as='h2'
              color='white'
              textAlign='center'>
                About
            </Heading>
            <Text
              p={2}
              fontSize={2}>
                This directory of Reformed Baptist churches is a collection of 560 churches that hold to the 
                1689 London Baptist Confession of Faith or a similar statement of faith. It is our desire that 
                this list would be used of God to help Christians find a church when considering a move, or 
                when planning a trip.
            </Text>
          </Box>
          <Box
            p={3}>
            <Heading
              as='h2'
              color='white'
              textAlign='center'>
                Quick Disclaimer
            </Heading>
            <Text
              p={2}
              fontSize={2}>
                We do not personally know all of these churches nor can we recommend them from personal knowledge.
                Some of the churches listed in this directory may not be considered by all to be distinctly Reformed.
                However, they would be like-minded in several areas of faith and practice and so are listed on this directory.
            </Text>
          </Box>
        </Flex>

        <Flex
          alignItems='center'>
          <Box
            p={3}>
            <Heading
              as='h1'
              color='secondary'
              textAlign='center'>
                Find a church
            </Heading>
            <Text
              p={2}
              fontSize={2}>
                Visit the map to search by location
                to find a church nearby, whether at
                home or traveling.
            </Text>
          </Box>
          <Box>
            <Image
              p={4}
              src='https://source.unsplash.com/random/512x384?mountains'
            />
          </Box>
        </Flex>

      </ThemeProvider>
    </>
  );
}

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
export default App;
