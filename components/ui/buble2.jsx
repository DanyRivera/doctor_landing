import React from 'react'
import * as motion from "motion/react-client"

const Buble2 = ({ className = "" }) => {
  return (
    <motion.div initial={{opacity: 0, scale: 0.4}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}}
      className={`border-2 border-primary absolute p-4 rounded-full shadow-2xl w-[5px] ${className}`}
    />
  )
}

export default Buble2
