import React from "react";

const Buble = ({ className = "" }) => {
  return (
    <div
      className={`bg-primary absolute p-4 rounded-2xl shadow-2xl w-[5px] ${className}`}
    />
  );
};

export default Buble;
