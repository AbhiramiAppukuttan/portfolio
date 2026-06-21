import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
        >
          {/* AA logo with spinning ring */}
          <div className="relative mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-2 border-transparent"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(239,68,68,0.9), rgba(239,68,68,0.1), rgba(239,68,68,0.9))',
                borderRadius: '50%',
                padding: '2px',
              }}
            >
              <div className="w-full h-full rounded-full bg-[#050508]" />
            </motion.div>

            {/* AA centred inside */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="font-black text-white text-xl tracking-tight select-none"
              >
                AA
              </motion.span>
            </div>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-black text-white text-lg tracking-wide mb-1"
          >
            abhirami<span className="text-red-500">.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-zinc-600 text-xs tracking-widest mb-10"
          >
            full stack developer
          </motion.p>

          {/* Progress bar */}
          <div className="w-40 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full bg-red-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
