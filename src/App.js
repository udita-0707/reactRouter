import Home from './components/Home';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'; 
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';
import Support from './components/Support';
import { useNavigate } from 'react-router-dom'; {/* useNavigate is used to navigate to another route, useLocation is used to get the current location */}

{/* NavLink is used to highlight the current route element, Routes is used to render the child route elements, Route is used to render the parent route element, Link is used to render the child route elements */}

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <ul className='ul'>
          {/* <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/support'>Support</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li> */}
          {/* <li>
            <Link to ='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/contact'>Contact</Link>
          </li>
          <li>
          <Link to='/support'>Support</Link>
          </li> */}
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink> {/* iske through m pehnchaan paari hun ki konsa page render hua hai using active class */}
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route path='/' element={<div>Home</div>} />
        <Route path='/support' element={<>Support</>} />
        <Route path='/about' element={<>About</>} />
        <Route path='/contact' element={<>Contact</>} />
        <Route path='*' element={<div>404</div>} /> */}
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>} /> {/* index is used to render the default route in the parent route element */}
          <Route path='/support' element={<Support/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
