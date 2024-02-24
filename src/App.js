import './App.css';
import React from 'react';
import { Route, BrowserRouter,Routes} from 'react-router-dom';
import HomeTwo from './components/pages/Home02';
import AboutMain from './components/pages/About';
import InstructorOne from './components/pages/InstructorPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ContactPage from './components/pages/ContactPage';
import BlogPageOne from './components/pages/BlogPageOne';


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route exact path={`${process.env.PUBLIC_URL + '/'}`} element={<HomeTwo/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/about'}`} element={<AboutMain/>}/>

           
              <Route exact path={`${process.env.PUBLIC_URL + '/instructors'}`} element={<InstructorOne/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/login'}`} element={<Login/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/register'}`} element={<Register/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/contact'}`} element={<ContactPage/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/blog'}`} element={<BlogPageOne/>}/>

           </Routes>

      </BrowserRouter>
  );
}

export default App;

