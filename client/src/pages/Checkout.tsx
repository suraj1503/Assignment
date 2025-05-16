import React, { useState } from "react";
import { NUM_COUNTERS } from "../constants/constant.ts";
import Counters from "../components/Counters.tsx";
import type { CheckoutQueue } from "../types/index.ts";
import { findNextCheckout } from "../utils/utility.ts";
import AddItems from "../components/AddItems.tsx";
import toast from "react-hot-toast";

const initialValue = Array.from({ length: NUM_COUNTERS }, () => ({
  customers: [],
}));

const Checkout: React.FC = () => {
  const [checkouts, setCheckouts] = useState<CheckoutQueue[]>(initialValue);

  const handleAddCustomer = (inputValue: string) => {
    const items = parseInt(inputValue);
    if (!items || items <= 0) {
      toast.error("Please enter a valid input.", {
        position: "bottom-center",
      });

      return;
    }

    const index = findNextCheckout(checkouts);
    const updated = [...checkouts];
    updated[index].customers.push(items);
    setCheckouts(updated);
    toast.success(
      () => (
        <span>
          Please check <b>{`Counter ${index + 1}`}</b>
        </span>
      ),
      {
        position: "bottom-center",
      }
    );
  };

  const handleRemoveFirstItem = (counterIndex: number) => {
    const updated = [...checkouts];
    if (updated[counterIndex].customers.length > 0) {
      toast.success(
        `${updated[counterIndex].customers[0]} item removed from Counter ${counterIndex + 1}.`,
        {
          position: "bottom-center",
          duration:3000
        }
      );
      updated[counterIndex].customers.shift();
      setCheckouts(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-1">
        Hypermart Checkout System
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Real-time queue management system
      </p>

      <AddItems handleAddCustomer={handleAddCustomer} />
      <Counters checkouts={checkouts} onRemove={handleRemoveFirstItem} />
    </div>
  );
};

export default Checkout;
