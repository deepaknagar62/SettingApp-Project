import React, { useState } from 'react';
import './CSS/searchBar.css'

function SearchBar({ components, onComponentSelect }) {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
  
    const handleSearch = (e) => {
      const text = e.target.value;
      setSearchText(text);
      setShowResults(text.length > 0); 
    };
  
    const handleSelectComponent = (componentName) => {
      setSearchText(''); 
      setShowResults(false); 
      onComponentSelect(componentName);
    };
  
    const filteredComponents = components.filter((component) =>
      component.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className="search-bar-container">
      <input style={{borderRadius:'30px'}}
        type="text"
        placeholder="Search settings"
        value={searchText}
        onChange={handleSearch}
        className="search-input"
      />
      {showResults && (
        <ul className="search-results">
          {filteredComponents.map((component) => (
            <li key={component} onClick={() => handleSelectComponent(component)}>
              {component}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
