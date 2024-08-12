import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Entityo from './components/Entityo';
import Scad from './components/Scad';
import Navbar from './components/Navbar';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const items = [
    { name: 'DGS', path: '/entity1' },
    { name: 'SCAD', path: '/scad' },
    { name: 'ADDA', path: '/entity3' },
    { name: 'ADDED', path: '/entity4' },
    // Add additional items manually here
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.classList.remove('show');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleFocus = () => {
    dropdownRef.current.classList.add('show');
  };

  return (
    <div className='App'>
      <Navbar/>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='App tdra-bg d-flex justify-content-center align-items-center vh-100'>
                <div className='container'>
                  <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6'>
                      <div className='input-group mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          aria-label='Text input with dropdown button'
                          placeholder='Search...'
                          onFocus={handleFocus}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className='dropdown-menu' ref={dropdownRef}>
                          {filteredItems.map((item, index) => (
                            <li key={index}>
                              <Link className='dropdown-item' to={item.path}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route exact path='/entity1' element={<Entityo />} />
          <Route exact path='/scad' element={<Scad/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
