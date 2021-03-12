import './App.css';
import Table from './Table';
import getSomeData from './data/dummy-data';

function App() {
  return (
    <div className="App">
      <Table data={getSomeData(9,25)} />
    </div>
  );
}

export default App;
