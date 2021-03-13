import './App.css';
import Table from './Table';
//import getSomeData from './data/dummy-data';
import starterData from './data/25rows9properties.json';

function App() {
  // #getSomeData takes two arguments, number of columns and number of rows
  // const starterData = getSomeData(9,25);
  // console.log(JSON.stringify(starterData));

  return (
    <div className="App">
      {/* Table component takes an array of objects */}
      <Table data={starterData} />
    </div>
  );
}

export default App;
