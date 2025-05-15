import { useState, useEffect } from 'react';
import Papa from 'papaparse'
import Sidebar from './components/Sidebar';
import ChartDisplay from './components/ChartDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data,setData] = useState([])
  const [selectedCompany,setSelectedCompany] = useState(null)

  useEffect(() => {
    Papa.parse('/dump.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  }, []);

  const companies = [...new Set(data.map(row => row.index_name))]
  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 bg-light sidebar'>
          <h4 className='p-3'>Companies</h4>
            <Sidebar companies={companies} onSelect={setSelectedCompany}/>
        </div>
        <div className='col-md-9'>
          <h4 className='p-3'>{selectedCompany ? selectedCompany : "Select a company"}</h4>
          {selectedCompany && (<ChartDisplay data={data.filter(row => row.index_name === selectedCompany)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
