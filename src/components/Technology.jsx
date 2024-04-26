import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import TailWindIcon from "../assets/Tail.jpeg";
import { motion } from "framer-motion";

const variantIcon = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x: 0 }}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={variantIcon(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
         variants={variantIcon(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
         variants={variantIcon(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-7xl text-red-700" />
        </motion.div>
        <motion.div 
         variants={variantIcon(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={TailWindIcon}
            alt="tailwind"
            className="rounded-2xl border-4 border-neutral-800 p-4 w-20"
          />
        </motion.div>
        <motion.div 
         variants={variantIcon(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
