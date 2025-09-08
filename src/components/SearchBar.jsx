import { useState } from "react";
import { useSearch } from "../context/SearchContext";

export function SearchBar() {
  const [value, setValue] = useState("");
  const { setSearch } = useSearch();

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <form
      className="d-flex px-2"
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        value={value}
        aria-label="Search"
        onChange={handleChange}
      />
    </form>
  );
}
