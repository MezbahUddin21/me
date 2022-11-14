
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from'./components/Header';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import{Projects} from './components/Projects';
import {Contact} from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
