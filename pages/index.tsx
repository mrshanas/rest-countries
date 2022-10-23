import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CountryCard } from "../components";

const baseUrl = "https://restcountries.com/v3.1";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const router = useRouter();
  const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    searchCountries(search);
  };

  const fetchCountries = async () => {
    const res = await fetch(`${baseUrl}/all`);
    const data = await res.json();

    if (res.ok) setCountries(data);
    else setCountries([]);
  };

  const searchCountries = async (name: string) => {
    if (!search) return fetchCountries();

    const res = await fetch(`${baseUrl}/name/${name}`);
    const data = await res.json();

    if (res.ok) setCountries(data);
  };

  const filterCountries = (region: string) => {
    const filteredCountries = countries.filter(
      (country: any) => country?.region == region
    );

    setCountries(filteredCountries);
  };

  return (
    <main>
      <Head>
        <title>REST Countries</title>
      </Head>

      {/* Search && Filter Bar  */}
      <div className="flex flex-col md:flex-row gap-y-3 w-[99%] md:w-[90%] mx-auto items-center justify-between my-4">
        {/* Search Bar  */}
        <div className="flex w-[95%] md:w-1/3 cursor-pointer items-center rounded-md gap-x-3 bg-white shadow-md dark:bg-darkBlue-el px-4 py-3 ">
          <MagnifyingGlassIcon className="h-5" />
          <input
            type="search"
            onChange={handleChange}
            value={search}
            placeholder="Search for a country..."
            className="outline-none w-full h-full border-none flex-grow bg-inherit"
          />
        </div>

        {/* Filter by Continent Dropdown */}
        <div className="self-start ml-3 md:ml-0">
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center cursor-pointer py-3 px-4 bg-white dark:bg-darkBlue-el rounded-md shadow-md">
              <p className="text-sm">Filter by Region</p>{" "}
              <ChevronDownIcon className="ml-2 h-6" aria-hidden />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 z-10 w-full bg-white dark:bg-darkBlue-el shadow-md rounded-md p-2">
                {regions.map((item: string) => (
                  <Menu.Item key={item}>
                    <button
                      onClick={() => filterCountries(item)}
                      className="block my-2"
                    >
                      {item}
                    </button>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Countries  */}
      <section className="grid md:grid-cols-3 gap-x-4 gap-y-5 w-[95%] mx-auto my-8">
        {countries &&
          countries.map((country: any) => (
            <CountryCard
              onClick={() => {
                router.push({
                  pathname: "/country",
                  query: { name: country?.name.common },
                });
              }}
              flag={country?.flags.png}
              population={country?.population}
              name={country?.name.common}
              continent={country.region}
              capital={country?.capital}
              key={country?.name.common}
            />
          ))}

        {!countries && <p>No countries were found</p>}
      </section>
    </main>
  );
};

export default Home;
