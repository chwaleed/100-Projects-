import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loading() {
  const [value, setValue] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 100) {
        setValue((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setLoadingComplete(true);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <>
      <motion.div
        animate={value === 100 && { y: "-100%", rotateZ: 180 }}
        transition={{ duration: 0.5 }}
        className={`h-screen w-screen  bg-white fixed z-20 `}
      >
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-[3rem] md:text-[10rem]">{value}%</h1>
        </div>
      </motion.div>
    </>
  );
}

export default Loading;
