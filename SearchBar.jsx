import React, { useState } from "react";
import { FiGlobe, FiPaperclip, FiArrowRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./SearchBar.css";
import { FaHeartbeat } from "react-icons/fa";
 

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  
  const [submittedQueries, setSubmittedQueries] = useState([]);

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  if (isLoginPage) return null;

  const handleSearch = () => {
    if (!query.trim()) return;

    fetch("http://localhost:5000/queries", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Search result:", data);
        setSubmittedQueries((prev) => [...prev, query]);
        setQuery("");
      })
      .catch((err) => console.error("Search error:", err));
  };

  return (
    <div className={`search-container ${isFocused ? "focused" : ""}`}>
      <h2 className="search-title">What do you want to know?</h2>
      <div className="scrach-container">
        <div className="scrach-title">
          <h1>BackEnd-Computer</h1>
           <div className="container">
            <div className="container-title">
              <h4>DashBoard-Server</h4>
            </div>
           </div>
        </div>
        <div className="img-container">
          <FaHeartbeat size={50}/>
          </div> 
      </div>
      
      <div className="search-box-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="search-box"
        />
        <div className="icons">
          <FiGlobe className="icon" />
          <FiPaperclip className="icon" />
          <button className="send-btn" onClick={handleSearch}>
            <FiArrowRight />
          </button>
        </div>
      </div>

      {submittedQueries.length > 0 && (
        <div className="submitted-queries">
          <ul>
            {submittedQueries.map((q, idx) => (
              <li key={idx} className="ul-li">{q}</li>
            ))}
          </ul>
           
        </div>
      )}
    </div>
  );
};

export default SearchBar;
