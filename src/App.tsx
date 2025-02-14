import { motion } from "motion/react"
import { useState } from "react";
import { images } from "./constants/images";

function App() {
  const [selectedImage, setSelectedImage] = useState<typeof images[number] | null>(null)

  const CONTAINER_SIZE = 384;
  const ITEM_SIZE = 68;

  return (
    <section 
      className="w-full h-dvh select-none flex items-center justify-center bg-white"
    >
      {selectedImage != null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .1 }}
          className="absolute inset-0 z-10 flex justify-center items-center bg-white"
        >
          <motion.div
            layoutId={selectedImage.id}
            className="border-8 absolute overflow-hidden border-white w-60 h-60"
            style={{
              borderRadius: 24,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, .2)', 
              transform: 'none'
            }}
          >
            <img 
              src={selectedImage.src} 
              className="w-full h-full object-cover"
              alt="Selected Image" 
            />
            <svg
              onClick={() => setSelectedImage(null)} 
              className="absolute stroke-gray-700 p-1 rounded-full bg-white right-2 top-2 cursor-pointer"
              width="28"
              height="28"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        transition={{ type: 'tween', duration: .3, ease: 'easeInOut' }}
        className="rounded-full flex items-center justify-center relative"
        style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
      >
        {images.map((item, index) => (
          <motion.div
            key={item.id}
            style={{ 
              width: ITEM_SIZE, 
              height: ITEM_SIZE,
              transform: `translate( ${Math.sin(item.angle) * ((CONTAINER_SIZE / 2) - (ITEM_SIZE / 2))}px, ${Math.cos(item.angle) * ((CONTAINER_SIZE / 2) - (ITEM_SIZE / 2))}px)`
            }}
            className="absolute cursor-pointer"
          >
            <motion.div
              layoutId={item.id}
              transition={{ type: 'spring', duration: .7, bounce: .35 }}
              className="w-full h-full"
              style={{ boxShadow: 'none', borderRadius: 12 }}
              onClick={() => setSelectedImage(item)}
            >
              <motion.div
                initial={{ rotate: (360 / 12) * -index}}
                className="w-full h-full rounded-xl overflow-hidden border-4 border-white"
                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, .2)' }}
              >
                <img
                  src={item.src}
                  className="w-full h-full object-cover"
                  alt="Image" 
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default App
