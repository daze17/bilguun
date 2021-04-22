import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

const variants = {
    open: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
      
    },
    closed: {
      y: 50,
      opacity: 0,
      x: -100,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


  
const MenuItem = ({ title, closeDrawer, slug }) => {

    return (
      <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      >
        <button onClick={closeDrawer} style={{background: 'transparent', border: 'none'}}>
          <Link href={slug}>{title}</Link>
        </button>
      </motion.li>
    );
  };

  export default MenuItem