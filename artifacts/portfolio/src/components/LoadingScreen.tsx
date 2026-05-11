import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      style={{ pointerEvents: 'none' }}
      data-testid="loading-screen"
    >

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="flex flex-col items-center">

        {/* Loader */}
        <motion.div
          className="relative h-28 w-28 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-spin" />

          {/* Middle Ring */}
          <div
            className="absolute inset-2 rounded-full border-r-2 border-blue-500 animate-spin"
            style={{
              animationDirection: 'reverse',
              animationDuration: '1.5s',
            }}
          />

          {/* Inner Ring */}
          <div
            className="absolute inset-4 rounded-full border-b-2 border-purple-500 animate-spin"
            style={{
              animationDuration: '2s',
            }}
          />

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">

            <h1 className="text-xl md:text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              SAURAV://AI
            </h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="text-gray-400 tracking-[0.3em] uppercase text-xs mb-6"
        >
          Initializing System...
        </motion.p>

        {/* Loading Dots */}
        <div className="flex space-x-2">

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
              initial={{ y: 0 }}
              animate={{ y: [-6, 0, -6] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}