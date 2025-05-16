import React from "react";
import { BsPeople } from "react-icons/bs";
import type { CheckoutQueue } from "../types/index";
import CounterItem from "./CounterItem";

interface CountersProps {
  checkouts: CheckoutQueue[];
  onRemove: (counterIndex: number) => void;
}

const Counters: React.FC<CountersProps> = ({ checkouts, onRemove }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {checkouts.map((queue, idx) => {
        const totalItems = queue.customers.reduce((a, b) => a + b, 0);
        const isLeastLoaded =
          totalItems ===
          Math.min(
            ...checkouts.map((c) => c.customers.reduce((a, b) => a + b, 0))
          );

        return (
          <div
            key={idx}
            className={`bg-white shadow-lg rounded-xl p-6 border ${
              isLeastLoaded ? "border-green-400" : "border-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Counter {idx + 1}</h2>
              <span className="text-gray-500 flex items-center gap-1">
                <span className="text-xl">
                  <BsPeople />
                </span>{" "}
                {queue.customers.length} {queue.customers.length > 1 ? "customers" : "customer"}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {queue.customers.map((items, index) => (
                <CounterItem
                  key={index}
                  items={items}
                  index={index}
                  onRemove={index === 0 ? () => onRemove(idx) : undefined}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Total Items: {totalItems}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Counters;
