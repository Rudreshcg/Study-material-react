import './App.css';
import CourseList from './CourseList'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import About from './About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <CourseList /> */}
        <Routes>
          {/* <Route path='/add' element={<Navigate to="/" />} Component={() => (<AddContact addContactHandler={addContactHandler} />)} /> */}
          <Route path='/' Component={() => (<CourseList />)} />
          <Route path='/about' Component={() => (<About />)} />
          {/* <Route path='/contact/:id' Component={()=>(<ContactDetail/>)} ></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
