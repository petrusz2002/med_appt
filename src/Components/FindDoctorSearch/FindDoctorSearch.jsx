import React, { useState } from "react";
import "./FindDoctorSearch.css";

const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "Dentist",
  "ENT",
  "Gynecologist"
];

const FindDoctorSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSelect = (item) => {
    setQuery(item);
    setShowList(false);

    if (onSearch) {
      onSearch(item);
    }
  };

  return (
    <div className="search-container">
      
      <input
        type="text"
        value={query}
        placeholder="Search doctor specialty..."
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowList(true)}
        onBlur={() => setTimeout(() => setShowList(false), 200)}
      />

      {showList && (
        <ul className="dropdown-list">
          {specialties
            .filter((item) =>
              item.toLowerCase().includes(query.toLowerCase())
            )
            .map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;