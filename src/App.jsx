import React from 'react'
import Home from './Modules/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Posts from './Components/Posts/Posts';
import Setting from './Components/Setting/Setting'
import { LineChart } from './Components/Dashboard/Chart/LineChart';
import { ColumnChart } from './Components/Dashboard/Chart/ColumnChart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App