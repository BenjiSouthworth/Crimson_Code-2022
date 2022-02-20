import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />

      <div className='main-content'>
        Hello
      </div>
    </div>
  );
}

export default App;
