import { FC } from "react";
import Image from "next/image";

type Props = {
  capital: string;
  continent: string;
  flag: string;
  name: string;
  onClick: () => void;
  population: number;
};

const CountryCard: FC<Props> = ({
  capital,
  continent,
  flag,
  name,
  onClick,
  population,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white cursor-pointer rounded-md shadow-md hover:scale-105 transition ease-out dark:bg-darkBlue-el"
    >
      <div className="relative h-56 w-full">
        <Image src={flag} layout="fill" alt={name}/>
      </div>
      <div className="w-[95%] mx-auto my-4">
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
