import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main animals={animals}/>
      <Footer />
    </div>
  );
}


export default App;
