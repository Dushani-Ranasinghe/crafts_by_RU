import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import SubNavbar from './components/SubNavbar';

function App() {
  return (
    <div className="App"> 
    <div className='App-container'>
     <Navbar/>
     <Body/>
     <SubNavbar/>
     </div>
    </div>
  );
}

export default App;
