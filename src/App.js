import './App.css';
import Table from './Table';
import getSomeData from './data/dummy-data';

function App() {
  return (
    <div className="App">
      {/* Table component takes an array of objects */}
      {/* #getSomeData takes two arguments, number of columns and number of rows */}
      <Table data={getSomeData(9,25)} />
    </div>
  );
}

export default App;
