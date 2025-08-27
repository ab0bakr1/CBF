import { Route, Routes } from 'react-router-dom';
import './App.css';
import HOME from './Component/Peages/HOME';
import AboutPage from './Component/Peages/AboutPage';
import Shop from './Component/Peages/Shop';
import Blog from './Component/Peages/Blog';
import Chef from './Component/Peages/Chef';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/chef' element={<Chef />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>    
  );
}

export default App;
