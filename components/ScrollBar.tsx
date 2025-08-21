import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';
import React from 'react';

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const planeX = useTransform(scrollYProgress, [0, 1], ['0vw', '100vw']);

  return (
    <div className="flex flex-col">
      <motion.div
        className="z-50 bg-green-500"
        style={{
          scaleX: scrollYProgress,
          height: '5px',
          transformOrigin: 'left',
          position: 'fixed',
          width: '100%',
          top: 0,
        }}
      />
      <motion.div
        className="text-2xl z-50"
        style={{
          x: planeX,
          color: 'black',
          fontSize: '24px',
          position: 'fixed',
          top: '1px',
        }}
      >
        <FaPlane />
      </motion.div>
    </div>
  );
};

export default ScrollBar;
