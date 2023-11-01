import React, { useState } from "react";

const Search = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="relative top-[98px] w-[650px] bg-white rounded-lg flex flex-col justify-center items-center pt-6 pb-[400px]">
      <div className="w-full flex flex-row justify-center items-end gap-4  border-b-[0.5px] border-gray-200 ">
        <button
          onClick={() => setActive(true)}
          className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
            active ? " border-[#c94055]" : "border-white"
          }`}
        >
          Search by Criteria
        </button>
        <button
          onClick={() => setActive(false)}
          className={`text-sm font-sans font-semibold tracking-wide py-2 px-1 border-b-[3px] ${
            !active ? " border-[#c94055]" : "border-white"
          }`}
        >
          Search by Profile ID
        </button>
      </div>

      <div className="mt-10">
        <label htmlFor="">
          <input className="w-[400px] h-[50px] rounded-none" type="text" placeholder="Enter Profile ID" />
        </label>
      </div>

      <div className="fixed text-sm font-sans font-semibold tracking-wide bottom-6 z-50 w-[600px] text-center bg-[#d8465c] py-3 rounded-lg text-white">
        Show Me Profiles
      </div>
    </div>
  );
};

export default Search;
