import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './create'
import Home from './Home'
import Post from './post'
import Update from './Update';
import User from './User';
import {DateProvider} from './DateContext'



class App extends React.Component {
  render() {
    return (
      <DateProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Post />}/>
            <Route path="create" element={<Create />}/>
            <Route path="edit/:id" element={<Update />}/>
            <Route path="user" element={<User />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </DateProvider>
    );
  }
}

export default App;
