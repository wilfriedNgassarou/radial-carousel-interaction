import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import { BellFill, ChevronDown } from "react-bootstrap-icons";
import { activities } from "../App";

export function CardCollapsed({ setIsExtended }: {setIsExtended: Dispatch<SetStateAction<boolean>>}) {
  return (
    <motion.div
      layoutId="card"
      onClick={() => setIsExtended(true)} 
      className="h-14 w-80 p-2 flex relative items-center cursor-pointer"
      style={{ 
        borderRadius: 8,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)' 
      }}
    >
      <div className="h-full flex items-center gap-2">
        <motion.div 
          layoutId="card-bell" 
          className="h-full aspect-square bg-gray-200 flex justify-center items-center"
          style={{ borderRadius: 6 }} 
        >
          <BellFill size={24} strokeWidth={0.5} className="fill-white stroke-gray-400" />
        </motion.div>
        <div className="flex flex-col gap-1">
          <motion.span
            layout="position" 
            layoutId="card-title" 
            className="leading-none text-sm font-semibold"
          >
            {activities.length} New Activities
          </motion.span>
          <motion.span 
            key="card-title-2"
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: .2 } }}
            exit={{ opacity: 0 }}
            className="leading-none text-sm text-gray-500"
          >
            What's happening around you
          </motion.span>
        </div>
      </div>
      <motion.div 
        layoutId="card-chevron" 
        className="absolute right-2 flex items-center justify-center w-6 h-6 bg-gray-400"
        style={{ borderRadius: 12 }}
      >
        <ChevronDown size={18} className="fill-white" />
      </motion.div>
    </motion.div>
  )
}