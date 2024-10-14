import './App.css';
import { useState } from 'react';
import Cards from './components/Cards'
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

  return (
    <div className="App">
      <Cards data={data} />
      <Form setData={setData} />
    </div>
  );
}

export default App;
