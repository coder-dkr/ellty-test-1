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

  const [confirmtext, setconfirmtext] = useState("pages are updated in console")

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


  const handleDone = () => {
    
    document.querySelector(".button-overlay-click").classList.add("clicked")

    setconfirmtext("pages updated")

    console.log('Selected Options:', options.filter((option) => option.selected));

    setInterval(() => {
      setconfirmtext("pages are updated in console")
    }, 2000);

  };

  const handleMouseLeave = () => {
    document.querySelector(".button-overlay-click").classList.remove("clicked")
  }

  return (
    <>
    <p className="confirmtext" >{confirmtext}</p>
      <div id='frame'>
        <div id="box">
          <div id="all-pages-selector" >
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
          <ul className={`open`}>
            {options.map((option) => (
              <li key={option.id} className='Page'>
                <label onClick={() => toggleOption(option.id)}>{option.label}</label>
                <div className='checkbox-holder' >
                  <input
                    type="checkbox"
                    checked={option.selected}
                    onChange={() => toggleOption(option.id)}
                  />
                </div>
              </li>
            ))}
            <hr></hr>
          </ul>
          <button id="done-button" onClick={handleDone} onMouseLeave={handleMouseLeave}>
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

