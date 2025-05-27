import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WriteContent from './pages/Create/WriteContent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/writecontent" element={<WriteContent/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

