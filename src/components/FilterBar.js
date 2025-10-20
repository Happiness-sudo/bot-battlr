import React from "react";

function FilterBar({ setFilterClass }) {
  return (
    <select onChange={(e) => setFilterClass(e.target.value)}>
      <option value="">Filter by Class...</option>
      <option value="Assault">Assault</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
      <option value="Scout">Scout</option>
    </select>
  );
}

export default FilterBar;
