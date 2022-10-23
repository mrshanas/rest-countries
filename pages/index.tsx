import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { CountryCard } from "../components";

export const getStaticProps: GetStaticProps = async () => {
  const continents: string[] = [
    "Africa",
    "Asia",
    "Australia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  return {
    props: {
      continents,
    },
  };
};

const Home: NextPage = ({ continents }: any) => {
  return (
    <main className="">
      <Head>
        <title>REST Countries</title>
      </Head>

      {/* Search && Filter Bar  */}
      <div className="flex flex-col md:flex-row gap-y-3 w-[99%] md:w-[90%] mx-auto items-center justify-between my-4">
        {/* Search Bar  */}
        <div className="flex w-[95%] md:w-1/3 cursor-pointer items-center rounded-md hover:scale-105 transition ease-out gap-x-3 bg-white shadow-md dark:bg-darkBlue-el px-4 py-3 ">
          <MagnifyingGlassIcon className="h-5" />
          <input
            type="search"
            placeholder="Search for a country..."
            className="outline-none w-full h-full border-none flex-grow bg-inherit"
          />
        </div>

        {/* Filter by Continent Dropdown */}
        <div className="self-start ml-3 md:ml-0">
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex hover:scale-105 transition ease-out items-center cursor-pointer py-3 px-4 bg-white dark:bg-darkBlue-el rounded-md shadow-md">
              <p className="text-sm">Filter by Continent</p>{" "}
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
                {continents.map((item: string) => (
                  <Menu.Item key={item}>
                    <button className="block my-2">{item}</button>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Countries  */}
      <section className="grid md:grid-cols-3 gap-x-4 gap-y-5 w-[95%] mx-auto my-8">
        <CountryCard
          name="Tanzania"
          capital="Dodoma"
          continent="Africa"
          population={45000000}
        />
        <CountryCard
          name="Tanzania"
          capital="Dodoma"
          continent="Africa"
          population={45000000}
        />{" "}
        <CountryCard
          name="Tanzania"
          capital="Dodoma"
          continent="Africa"
          population={45000000}
        />{" "}
        <CountryCard
          name="Tanzania"
          capital="Dodoma"
          continent="Africa"
          population={45000000}
        />
      </section>
    </main>
  );
};

export default Home;
