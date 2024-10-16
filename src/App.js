import './App.css';
import { useState } from 'react';
import Cards from './components/Cards'
import Complete from './components/Complete';
import Form from './components/Form'

const defaultData = {
  name: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: ""
}

function App() {
  const [data, setData] = useState(defaultData);
  const [complete, setComplete] = useState(false);

  const resetData = () => {
    setData(defaultData);
  }

  return (
    <div className="App">
      <Cards data={data} />
      {
        complete
        ?
        <Complete resetData={resetData} setComplete={setComplete} />
        :
        <Form setData={setData} setComplete={setComplete} />
      }
    </div>
  );
}

export default App;
