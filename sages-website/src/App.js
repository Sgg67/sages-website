import './App.css';
import './components/Introduction';
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Projects/>
      </BrowserRouter>
      
      <Introduction/>
    </div>
  );
}

export default App;
