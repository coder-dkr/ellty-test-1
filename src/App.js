
import './App.css';
import React, { useState } from 'react';


function App() {

  const [options, setOptions] = useState([
    { id: 1, label: 'Page 1', selected: false },
    { id: 2, label: 'Page 2', selected: false },
    { id: 3, label: 'Page 3', selected: false },
    { id: 4, label: 'Page 4', selected: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleOption = (id) => {
    const updatedOpts = options.map((option) =>
      option.id === id ? { ...option, selected: !option.selected } : option
    );
    setOptions(updatedOpts);

    const allSelected = updatedOpts.every((option) => option.selected);
    setSelectAll(allSelected);
  };

  const toggleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    const updatedOpts = options.map((option) => ({
      ...option,
      selected: newState,
    }));
    setOptions(updatedOpts);
  };

  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDone = () => {
    setDropdownOpen(false);
    document.querySelector(".button-overlay-click").classList.add("clicked")

    console.log('Selected Options:', options.filter((option) => option.selected));
  };

  const handleMouseLeave = () => {
    document.querySelector(".button-overlay-click").classList.remove("clicked")
  }

  return (
    <>
    <div id='frame'>
      <div id="box">
      <div id="all-pages-selector" onClick={toggleDropdown}>
            <label>All pages</label>
            <div className='checkbox-holder' >
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
            />
            </div>
      </div>
      <hr></hr>
      

        <ul className={` ${ dropdownOpen ? 'open' : ''}`}>
          {options.map((option) => (
            <li key={option.id} className='Page'>
              <label onClick={() => toggleOption(option.id)}>{option.label}</label>
              <input
                type="checkbox"
                checked={option.selected}
                onChange={() => toggleOption(option.id)}
              />
            </li>
          ))}
          <hr></hr>
        </ul>  

        <button  id="done-button" onClick={handleDone} onMouseLeave={handleMouseLeave}>
          <div className='button-overlay-hover'></div>
          <div className='button-overlay-click'></div>
          <p>Done</p>
          </button>
       
      </div>


    </div>
    </>
  );
}

export default App;

