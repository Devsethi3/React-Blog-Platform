import React from "react";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <>
      <div>
        <form onSubmit={formSubmit} className="flex items-center justify-center mt-[3rem] gap-[1rem]">
          <input className="py-[12px] w-[40rem] px-[20px] rounded-lg border-none outline-none bg-[#ffffff0f]"
            type="text"
            placeholder="Search by Category..."
            onChange={handleSearchKey}
            value={value}
          />
          {value && <span className="w-[45px] cursor-pointer text-[1.5rem] h-[45px] grid place-items-center rounded-full bg-[#9f18dd]" onClick={clearSearch}>x</span>}
          <button className="py-[12px] px-[50px] rounded-lg border-none outline-none bg-[#9f18dd]">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
