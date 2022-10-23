import { FC } from "react";
import Image from "next/image";

import im from "../assets/vercel.svg";

type Props = {
  capital: string;
  continent: string;
  flag?: string;
  name: string;
  population: number;
};

const CountryCard: FC<Props> = ({ capital, continent, name, population }) => {
  return (
    <div className="w-full bg-white cursor-pointer rounded-md shadow-md hover:scale-105 transition ease-out dark:bg-darkBlue-el">
      <div className="relative h-20">
        <Image src={im} layout="fill" />
      </div>
      <div className="w-[95%] mx-auto my-3">
        <h5 className="font-semibold text-xl">{name}</h5>
        <p>
          Population: <small>{population}</small>
        </p>
        <p>
          Continent: <small>{continent}</small>
        </p>
        <p>
          Capital : <small>{capital}</small>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
