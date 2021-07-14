import React from "react";
import { useHistory } from "react-router-dom";
import { cows } from "../assets/cows";
import { ReactComponent as CowIcon } from "../assets/lehma.svg";
import CowDetails from "./CowDetails";

const CowList = () => {
  const history = useHistory();
  return (
    <div className="p-5 md:p-10 ">
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-semibold">Lehmät</p>
        <button
          className="p-2 pl-3 pr-3 bg-blue-300 rounded-md text-white"
          onClick={() => history.push("/lisaa")}
        >
          + Lisää lehmä
        </button>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-flow-col grid-cols-10">
          <div className="col-span-1"></div>
          <div className="text-left col-span-5">Nimi</div>
          <div className="text-left col-span-2">Tilasto</div>
          <div className="text-center col-span-1">l / vko</div>
          <div className="text-center col-span-1">l / vrk</div>
        </div>

        {cows.map((cow) => (
          <div
            key={cow.id}
            className={
              cow.id % 2 === 0
                ? "grid grid-flow-col grid-cols-10 items-center bg-white border border-blue-300 mb-1 rounded-md"
                : "grid grid-flow-col grid-cols-10 items-center bg-blue-100 border border-blue-300 mb-1 rounded-md"
            }
          >
            <div className="p-3 col-span-1 flex flex-col items-center">
              <CowIcon
                className={
                  cow.literPerWeek <= 150
                    ? "fill-current text-red-500 h-8"
                    : "fill-current text-green-500 h-8"
                }
              />
            </div>
            <p className="text-left font-semibold col-span-5">{cow.name}</p>
            <p className="text-lg font-semibold col-span-2">{cow.average}</p>
            <p className="text-lg text-center font-semibold col-span-1">
              {cow.literPerWeek}
            </p>
            <p className="text-lg text-center font-semibold col-span-1">
              {cow.literPerDay}
            </p>
          </div>
        ))}
      </div>
      <div className="block md:hidden">
        {cows.map((cow) => (
          <CowDetails cow={cow} key={cow.id} />
        ))}
      </div>
    </div>
  );
};

export default CowList;
