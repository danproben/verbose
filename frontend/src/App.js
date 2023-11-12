import Stack from 'react-bootstrap/Stack';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Column1 from './components/Column1/Column1';
import Column2 from './components/Column2/Column2';

function App() {

  

  return (
    <Stack className='hstack' direction="horizontal" gap={5}>
      <div className="column1"><Column1 /></div>
      <div className="column2 ms-auto"><Column2 /></div>
      <div className="column3 ms-auto">Third item</div>
    </Stack>
  );
}

export default App;
