import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './LogInOut/LoginPage';
import List from './pages/Read/List';
import WriteContent from './pages/Create/WriteContent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/read/list" element={<List />} />
        <Route path="/create/writecontent" element={<WriteContent/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

