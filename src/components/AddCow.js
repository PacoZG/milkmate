import React from "react";
import { useHistory } from "react-router-dom";
import { cows } from "../assets/cows";
import { ReactComponent as CowIcon } from "../assets/lehma.svg";
import { useField } from "../hooks";

const AddCow = () => {
  const history = useHistory();
  const name = useField("text");
  const regNumber = useField("text");
  const race = useField("text");
  const color = useField("text");
  const info = useField("text");
  const day = useField("text");
  const month = useField("text");
  const year = useField("text");

  let id = cows.length;

  const handleAddCow = () => {
    const date =
      day.params.value + "." + month.params.value + "." + year.params.value;
    id += 1;
    const newCow = {
      id: parseInt(id),
      average: 0,
      literPerWeek: 0,
      literPerDay: 0,
      name: name.params.value,
      date: date,
      race: race.params.value,
      color: color.params.value,
      regNumber: regNumber.params.value,
      information: info.params.value,
    };
    name.reset();
    regNumber.reset();
    race.reset();
    color.reset();
    info.reset();
    day.reset();
    month.reset();
    year.reset();
    cows.push(newCow);
    console.log("COW: ", newCow);
  };
  return (
    <div className="md:p-16">
      <div className="md:pb-4">
        <div className="flex items-center md:space-x-3 p-2 md:pb-10 ">
          <CowIcon className="hidden md:block fill-current text-blue-900 h-10" />
          <p className="text-lg text-blue-900 font-bold">Lisää lehmä</p>
        </div>
        <div className="p-2 md:p-0 space-y-2">
          <div className="md:grid grid-flow-col grid-cols-10 items-center">
            <p className="col-span-2 text-lg text-blue-900 font-bold">Nimi</p>
            <input
              className="md:col-span-8 border-2 border-blue-300 rounded-md p-3 w-full"
              placeholder="Lemmikki"
              {...name.params}
            />
          </div>
          <div className="md:grid grid-flow-col grid-cols-10 items-center">
            <p className="col-span-2 text-lg text-blue-900 font-bold">
              Syntymäaika
            </p>
            <div className="md:col-span-3 flex space-x-1 w-full">
              <input
                className="border-2 border-blue-300 rounded-md p-3 w-1/3"
                placeholder="pp"
                {...day.params}
              />
              <input
                className="border-2 border-blue-300 rounded-md p-3 w-1/3"
                placeholder="kk"
                {...month.params}
              />
              <input
                className="border-2 border-blue-300 rounded-md p-3 w-1/3"
                placeholder="vvvv"
                {...year.params}
              />
            </div>
          </div>
          <div className="md:grid grid-flow-col grid-cols-10 items-center ">
            <p className="col-span-2 text-lg text-blue-900 font-bold">
              Rekisterinumero
            </p>
            <input
              className="col-span-8 border-2 border-blue-300 rounded-md p-3 w-full"
              placeholder="Rekisterinumero"
              {...regNumber.params}
            />
          </div>
          <div className="md:grid grid-flow-col grid-cols-10 items-center">
            <p className="col-span-2 text-lg text-blue-900 font-bold">Rotu</p>
            <input
              className="col-span-8 border-2 border-blue-300 rounded-md p-3 w-full"
              placeholder="Rotu"
              {...race.params}
            />
          </div>
          <div className="md:grid grid-flow-col grid-cols-10 items-center">
            <p className="col-span-2 text-lg text-blue-900 font-bold">Väri</p>
            <input
              className="col-span-8 border-2 border-blue-300 rounded-md p-3 w-full"
              placeholder="Väri"
              {...color.params}
            />
          </div>
          <div className="md:grid grid-flow-col grid-cols-10 items-center">
            <p className="col-span-2 text-lg text-blue-900 font-bold">
              Lisätietoja
            </p>
            <input
              className="col-span-8 border-2 border-blue-300 rounded-md p-3 w-full"
              placeholder="Lisätietoja"
              {...info.params}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly md:justify-end space-x-3">
        <button
          className="text-blue-900 w-1/2 md:w-24"
          onClick={() => history.push("/list")}
        >
          Peruuta
        </button>
        <button
          className="bg-blue-300 w-1/2 md:w-24 p-2 pl-6 pr-6 text-white md:rounded-md"
          onClick={() => handleAddCow()}
        >
          Tallenna
        </button>
      </div>
    </div>
  );
};

export default AddCow;
