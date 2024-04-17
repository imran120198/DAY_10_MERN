import React, { useState, useMemo } from "react";

function HeavyComputationComponent({ items }) {
  const [filterTerm, setFilterTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Expensive computation - filtering the items based on the filter term
  const filteredResult = useMemo(() => {
    console.log("Performing expensive computation...");
    return items.filter((item) => item.includes(filterTerm));
  }, [items, filterTerm]);

  // Update filteredItems when filteredResult changes
  useMemo(() => {
    setFilteredItems(filteredResult);
  }, [filteredResult]);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter filter term"
        value={filterTerm}
        onChange={handleFilterChange}
      />
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)" }}>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeavyComputationComponent;
