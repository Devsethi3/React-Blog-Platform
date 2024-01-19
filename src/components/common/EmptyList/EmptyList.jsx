import React from "react";

const EmptyList = () => {
  return (
    <div className="text-center mt-[5rem] grid place-items-center">
      <img width="100" className="opacity-[.8]" src="/images/empty-list.png" alt="" />
      {/* <h1 className="text-4xl font-bold">Oops!</h1> */}
      <p className="text-gray-300 text-2xl mt-[1rem]">There are no posts related to this category.</p>
    </div>
  );
};

export default EmptyList;
