import { HERO_CONTENT } from "../constants/index";
import AvatarPic from "../assets/avater-comp (1).png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Olawale Arowojolu
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
            className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 lg:p-8">
          <div className="flex justify-center rounded">
            <motion.img 
            initial = {{x: 100, opacity: 0 }}
            animate= {{x: 0, opacity: 1 }}
            transition={{duration: 1, delay: 1.2 }}

            src={AvatarPic} alt="OA" className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-3/4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
