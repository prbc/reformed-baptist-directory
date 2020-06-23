import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

//export default App;

//const App = props => {
//  return (
//    <>
//      <ThemeProvider
//        theme={theme}>
//
//        <Flex
//          p={2}
//          color='white'
//          bg='primary'
//          alignItems='center'
//        >
//          <Box>
//            <Text
//              p={3}
//              fontSize='3'
//              fontWeight='bold'>
//              Farese
//            </Text>
//          </Box>
//          <Box mx='auto' />
//
//          <Box
//            width={['0%', '100%', '100%']}>
//
//            <Link
//              href='/'
//              px={3}
//              color='inherit'>
//              Home
//              </Link>
//            <Link
//              variant='nav'
//              href='/about'
//              px={3}
//              color='inherit'>
//              About
//              </Link>
//            <Link
//              variant='nav'
//              href='/map'
//              px={3}
//              color='inherit'>
//              Map
//              </Link>
//            <Link
//              variant='nav'
//              href='/list'
//              px={3}
//              color='inherit'>
//              List
//              </Link>
//            <Link
//              variant='nav'
//              href='/legacy'
//              px={3}
//              color='inherit'>
//              Legacy
//              </Link>
//
//          </Box>
//
//
//        </Flex>
//
//        <Flex
//          color='white'
//          bg='primary'
//          justifyContent='center'
//          p={4}>
//          <Box
//            p={3}>
//            <Text
//              fontSize='5'
//              fontWeight='bold'
//              color='white'
//              textAlign='center'
//            >
//              Welcome to an online directory
//              of Reformed Baptist churches
//            </Text>
//          </Box>
//        </Flex>
//
//        <Flex
//          bg='secondary'
//          color='light'
//          p={4}
//          flexWrap={['wrap', 'nowrap', 'nowrap']}
//          justifyContent='space-evenly'
//        >
//          <Box
//            maxWidth='30em'
//            p={3}>
//            <Heading
//              as='h2'
//              color='white'
//              textAlign='center'>
//              About
//            </Heading>
//            <Text
//              p={2}
//              fontSize={2}>
//              This directory of Reformed Baptist churches is a collection of 560 churches that hold to the
//              1689 London Baptist Confession of Faith or a similar statement of faith. It is our desire that
//              this list would be used of God to help Christians find a church when considering a move, or
//              when planning a trip.
//            </Text>
//          </Box>
//          <Box
//            maxWidth='30em'
//            p={3}>
//            <Heading
//              as='h2'
//              color='white'
//              textAlign='center'>
//              Quick Disclaimer
//            </Heading>
//            <Text
//              p={2}
//              fontSize={2}>
//              We do not personally know all of these churches nor can we recommend them from personal knowledge.
//              Some of the churches listed in this directory may not be considered by all to be distinctly Reformed.
//              However, they would be like-minded in several areas of faith and practice and so are listed on this directory.
//            </Text>
//          </Box>
//        </Flex>
//
//        <Flex
//          p={4}
//          flexWrap={['wrap', 'nowrap', 'nowrap']}
//          alignItems='center'
//          justifyContent='space-evenly'
//        >
//          <Box
//            maxWidth='30em'
//            p={3}>
//            <Heading
//              as='h1'
//              textAlign='center'>
//              Find a church
//            </Heading>
//            <Text
//              p={2}
//              fontSize={2}>
//              Visit the map to search by location
//              to find a church nearby, whether at
//              home or traveling.
//            </Text>
//          </Box>
//          <Box>
//            <Image
//              p={2}
//              src='https://source.unsplash.com/random/512x384?mountains'
//            />
//          </Box>
//        </Flex>
//
//      </ThemeProvider>
//    </>
//  );
//}

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
