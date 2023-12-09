"use client";

import React, { useState } from "react";
import { CardData } from "./CardData";

interface Card {
  id: number;
  expression: string;
  translation: string;
  tip: string;
  example1: string;
  example2: string;
}

export const Card = () => {
  const [flippedCard, setFlippedCard] = useState<Card | null>(null);

  const handleCardFlip = (card: Card) => {
    setFlippedCard((prevCard) => (prevCard?.id === card.id ? null : card));
  };

  return (
    <div className="w-full bg-gray-900 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-10 rounded">
      {CardData.map((card: Card) => (
        <div key={card.id} className="relative">
          {/* front */}
          <div
            className={` h-96  bg-slate-300 rounded flex flex-col justify-center items-center p-4 transform ${
              flippedCard?.id === card.id ? "rotate-y-180" : ""
            }`}
          >
            <h3 className="text-gray-800  lg:text-lg font-bold mb-2">
              {card.expression}
            </h3>
            <button
              onClick={() => handleCardFlip(card)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Learn
            </button>
          </div>
          {/* back */}
          <div
            key={card.id}
            className={`absolute inset-0  max-h-96  bg-yellow-300 rounded flex justify-center items-center flex-col p-4 transform rotate-y-180 backface-visibility-hidden ${
              flippedCard?.id === card.id ? "" : "hidden"
            }`}
          >
            <div className="max-h-96 overflow-auto border-solid border-2 border-black rounded px-4 text-left ">
              <p>
                <span className="font-bold ">Tradução:</span> {card.translation}
              </p>
              <p>
                <span className="font-bold">Dica:</span> {card.tip}
              </p>
              <p>
                <span className="font-bold">Ex1:</span> {card.example1}
              </p>
              <p>
                <span className="font-bold">Ex2:</span> {card.example2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
