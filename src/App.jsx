import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/Profileupdate/ProfileUpdate';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/> 
      <Route path='/Chat' element={<Chat/>}/>
      <Route path='/profile' element={<ProfileUpdate/>}/> 
    </Routes>
    </>
  )
}

export default App
