import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div className=' bg-gray-200'>
      <MenuBar></MenuBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries" element={<Countries />}/>
        <Route path='countries/:countryName' element={<CountryDetail/>}/>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
