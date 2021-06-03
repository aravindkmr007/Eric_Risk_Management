import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Navbar />
        <Content />

      </div>
      
    </div>
  );
}

export default App;
