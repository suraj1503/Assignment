import { motion, AnimatePresence } from "motion/react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

interface CounterItemProp {
  items: number;
  index: number;
  onRemove?: () => void;
}


const CounterItem: React.FC<CounterItemProp> = ({ items, index, onRemove}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 py-2 px-3 rounded text-left flex items-center  justify-between"
      >
        <div className="flex items-center space-x-1">
          <IoCartOutline className="text-xl" />
          <p>{items} items</p>
        </div>

        <div>
          {index === 0 && (
            <button 
                className="hover:cursor-pointer"
                onClick={onRemove}
            >
              <MdOutlineCancel className="text-red-700 text-xl" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CounterItem;
