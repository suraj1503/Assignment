import { useState } from "react";

interface AddItemsProps {
    handleAddCustomer: (input:string) => void;
}

const AddItems:React.FC<AddItemsProps> = ({handleAddCustomer}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleClick=()=>{
        handleAddCustomer(inputValue);
        setInputValue('')
    }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
      <input
        type="number"
        min={1} 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue !== '') {
              handleClick();
            }
          }}
        placeholder="Enter number of items"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none"
      />
      <button
        onClick={handleClick}
        disabled={inputValue===''}
        className={`px-6 py-2 rounded text-white font-bold
            ${inputValue === '' 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'}`}
      >
        Checkout Items
      </button>
    </div>
  );
};

export default AddItems;
