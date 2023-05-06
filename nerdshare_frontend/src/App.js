import React from 'react';
import { Routes, Route, userNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='login' element= {<Login />} />,
      <Route path='/*' element= {<Home />} />,
    </Routes>
  );
}

export default App;
