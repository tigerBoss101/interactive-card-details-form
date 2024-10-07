import './App.css';
import background from './assets/images/bg-main-desktop.png';
import Form from './components/Form'

function App() {
  return (
    <div className="App">    
      <img src={background} alt="background" />
      <Form />
    </div>
  );
}

export default App;
