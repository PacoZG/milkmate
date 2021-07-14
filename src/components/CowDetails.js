import React, { useState } from "react";
import { ReactComponent as CowIcon } from "../assets/lehma.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

const CowDetails = ({ cow }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className={
        cow.id % 2 === 0
          ? "bg-white border border-blue-300 mb-1 rounded-md w-full"
          : " bg-blue-100 border border-blue-300 mb-1 rounded-md w-full"
      }
    >
      <div className=" flex items-center w-full justify-between p-3">
        <div className=" flex items-center space-x-2">
          <CowIcon
            className={
              cow.literPerWeek <= 150
                ? "fill-current text-red-500 h-8"
                : "fill-current text-green-500 h-8"
            }
          />
          <p className="text-left font-semibold col-span-5">{cow.name}</p>
        </div>
        <button
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          <Arrow
            className={
              showDetails
                ? "text-blue-900 h-6 w-6 transform rotate-90 transition duration-300"
                : " text-blue-900 h-6 w-6 transition duration-300"
            }
          />
        </button>
      </div>
      <div
        className={
          showDetails ? "p-2 bg-gray-100 rounded-b-md block " : "hidden"
        }
      >
        <div className="grid grid-flow-col grid-cols-3">
          <p className="text-lg text-center font-semibold">Tilasto</p>
          <p className="text-lg text-center font-semibold ">l / vko</p>
          <p className="text-lg text-center font-semibold ">l / vrk</p>
        </div>
        <div className="grid grid-flow-col grid-cols-3 border-t border-blue-300 p-2">
          <p className="text-lg text-center font-semibold">{cow.average}</p>
          <p className="text-lg text-center font-semibold ">
            {cow.literPerWeek}
          </p>
          <p className="text-lg text-center font-semibold ">
            {cow.literPerDay}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CowDetails;
