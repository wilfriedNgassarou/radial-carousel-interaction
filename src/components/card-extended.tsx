import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import { BellFill, ChevronDown } from "react-bootstrap-icons";
import { activities } from "../App";

export function CardExtended({ setIsExtended }: {setIsExtended: Dispatch<SetStateAction<boolean>>}) {
  return (
    <motion.div 
      layoutId="card" 
      className="w-80"
      style={{ 
        borderRadius: 8,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)' 
      }}
    >
      <motion.div
        layout
        className="h-12 w-80 p-2 flex justify-between items-center"
      >
        <div className="h-full flex items-center gap-2">
          <motion.div 
            layoutId="card-bell" 
            className="h-full aspect-square flex items-center justify-center bg-gray-200"
            style={{ borderRadius: 6 }} 
          >
            <BellFill size={16} strokeWidth={0.5} className="fill-white stroke-gray-400" />
          </motion.div>
          <div className="flex flex-col">
            <motion.span
              layout="position" 
              layoutId="card-title" 
              className="leading-none text-[10px] font-semibold"
            >
              {activities.length} New Activities
            </motion.span>
          </div>
        </div>
        <motion.div 
          layoutId="card-chevron" 
          onClick={() => setIsExtended(false)} 
          animate={{ rotate: 180 }}
          className="w-4 h-4 bg-gray-400 flex items-center justify-center cursor-pointer"
          style={{ borderRadius: 12 }}
        >
          <ChevronDown size={12} className="fill-white" />
        </motion.div>
      </motion.div>
      <div className="w-full h-px bg-gray-200" />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: .15 } }}
      >
        {
          activities.map((item, index) => (
            <div
              key={index}
              className="h-12 w-80 p-2 flex justify-between items-center"
            >
              <div className="h-full flex items-center gap-2">
                <div 
                  className="h-full aspect-square flex justify-center items-center bg-gray-200"
                  style={{ borderRadius: 6 }} 
                >{item.icon}</div>
                <div className="flex flex-col gap-1">
                  <span className="leading-none font-medium text-[10px]">
                    {item.title}
                  </span>
                  <span className="leading-none text-[10px] text-gray-500">
                    {item.text}
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500">{item.date}</span>
            </div>
          ))
        }
      </motion.section>
    </motion.div>
  )
}