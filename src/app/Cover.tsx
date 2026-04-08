import { motion } from "framer-motion";

<div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#1a0b3d] via-[#2b0f6b] to-[#5a1c6e] overflow-hidden">

  {/* Stars */}
  <div className="absolute inset-0 
    bg-[radial-gradient(circle,_#ffffff22_1px,_transparent_1px)] 
    [background-size:40px_40px]
    animate-pulse
  "></div>

  {/* Glow */}
  <div className="absolute w-[800px] h-[800px] 
    bg-[#ff8c00]/20 blur-[150px] rounded-full
    animate-[pulse_4s_ease-in-out_infinite]"
  ></div>

  <div className="text-center z-10">

    <motion.h1
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        textShadow: [
          "0 0 10px #ff8c00",
          "0 0 40px #ff8c00",
          "0 0 20px #ff8c00"
        ]
      }}
      transition={{ duration: 2 }}
      className="
        text-[60px] md:text-[120px] font-extrabold tracking-wide
        bg-gradient-to-b from-[#ffd966] to-[#ff8c00]
        bg-clip-text text-transparent
      "
    >
      PORTFOLIO
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-6 text-3xl text-white"
    >
      Phan Minh Khoa
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="text-white/70 text-xl"
    >
      2026
    </motion.p>

  </div>
</div>