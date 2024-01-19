import React from "react";

const Chip = ({ label }) => {
  return (
    <div className="my-[1rem]">
      <span className="text-[.8rem] rounded-md bg-[#9f18dd] text-[#ffffffe8] py-[.3rem] px-[.6rem]">{label}</span>
    </div>
  );
};

export default Chip;
