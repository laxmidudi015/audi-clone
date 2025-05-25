// DealersPage.jsx
import React from "react";
import DealerMap from "./DealerMap";
import "./DealerMap.css";

function Dealerspage() {
  return (
    <div className="dealer-page">
      <aside className="sidebar">
        <h2>🔍 Search Dealer</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Name, city or zip code"
        />
      </aside>
      <main className="map-container">
        <DealerMap />
      </main>
    </div>
  );
}

export default Dealerspage;
