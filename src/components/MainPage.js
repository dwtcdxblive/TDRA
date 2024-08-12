import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Entityo from './Entityo';
 
const MainPage = () => {
     const [searchTerm, setSearchTerm] = useState('');
     const dropdownRef = useRef(null);

     const items = [
       { name: 'Entity 1', link: <Entityo/> },
       { name: 'Entity 2', link: 'https://events.dxblive.com/entity2' },
       { name: 'Entity 3', link: 'https://events.dxblive.com/entity3' },
       {
         name: 'Dashboard Sample',
         link: 'https://app.powerbi.com/view?r=eyJrIjoiNDIwMTM3ZDYtYTU2MC00NDgyLWI4OWMtYjc3MTFhNmNkOGMyIiwidCI6IjdmOTg5ZDJkLTFiMjQtNDZmZi1hMzkyLWIxMmU2NWQ2MzkxYyIsImMiOjh9&pageName=ReportSectionb621f12070647be09138',
       },
     ];

     const filteredItems = items.filter((item) =>
       item.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

    return (
      <div className='tdra-bg d-flex justify-content-center align-items-center vh-100'>
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
                      <a className='dropdown-item' href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainPage;