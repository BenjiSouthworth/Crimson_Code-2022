import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import YearContent from './components/YearContent';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <SideMenu />
        <YearContent />
      </div>
    </ChakraProvider>
  );
}

export default App;
