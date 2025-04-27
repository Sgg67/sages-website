import './App.css';
import './components/Introduction';
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      
      <Introduction/>
    </div>
  );
}

export default App;
