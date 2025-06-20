import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './logInOut/LoginPage';
import List from './pages/Read/List';
import WriteContent from './pages/Create/WriteContent';
import PostDetail from './pages/Read/PostDetail';
import EditContent from './pages/Update/EditContent';
import JoinPage from './logInOut/JoinPage';
import Home2 from './pages/Home2';
import DeleteContent from './pages/Delete/DeleteContent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home2/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<JoinPage/>}/>
        <Route path="/read/list" element={<List />} />
        <Route path="/create/writecontent" element={<WriteContent/>}/>
        <Route path="/posts/:id/edit" element={<EditContent/>}/>
        <Route path= "/posts/:id" element={<PostDetail/>}/>
        <Route path="/posts/:id/delete" element={<DeleteContent/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;

