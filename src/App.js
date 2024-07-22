import './App.css';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import BackendContact from './pages/BackendContact';
import BackendContact2 from './pages/BackendContact2';
import BackendContact3 from './pages/BackendContact3';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/backendcontact'>회원가입</Link> | <Link to = "/backendcontact2">회원가입2</Link>
        | <Link to='/backendcontact3'>회원가입3</Link>
      </nav>
      <h1>오리는 연습중</h1>
      <img src='./images/030.jpg' alt='imgError' />
      <Routes>
        <Route path='/backendcontact' element={<BackendContact />} />
        <Route path='/backendcontact2' element={<BackendContact2 />} />
        <Route path='/backendcontact3' element={<BackendContact3 />} />
      </Routes>
    </div>
  );
}

export default App;
