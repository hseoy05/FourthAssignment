import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './logInOut/loginPage';
import List from './pages/Read/List';
import WriteContent from './pages/Create/WriteContent';
import PostDetail from './pages/Read/PostDetail';
import EditContent from './pages/Update/EditContent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/read/list" element={<List />} />
        <Route path="/create/writecontent" element={<WriteContent/>}/>
        <Route path="/pots/:id/edit" element={<EditContent/>}/>
        <Route path= "/posts/:id" element={<PostDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

