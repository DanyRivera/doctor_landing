import React from "react";
import * as motion from "motion/react-client"

const Buble = ({ className = "" }) => {
  return (
    <motion.div initial={{opacity: 0, scale: 0.4}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}}
      className={`bg-primary absolute p-4 rounded-2xl shadow-2xl w-[5px] ${className}`}
    />
  );
};

export default Buble;
