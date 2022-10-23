import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

const baseUrl = "https://restcountries.com/v3.1";

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${baseUrl}/name/${context.query?.name}`);
  const country = await res.json();

  return {
    props: {
      country: country[0],
    },
  };
};

export default function Country({ country }: any) {
  const router = useRouter();
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    fetchBorderCountries();
  }, []);

  const goBack = () => router.push("/");

  const fetchBorderCountries = async () => {
    const res = await fetch(
      `${baseUrl}/alpha?codes=${country?.borders.join(",")}`
    );
    const data = await res.json();

    if (res.ok) setBorderCountries(data);
  };

  console.log();

  return (
    <main>
      <>
        <Head>
          <title>{country?.name.common}</title>
        </Head>
      </>

      {/* Back Button  */}
      <div className="flex justify-start w-[90%] mx-auto my-3">
        <button
          onClick={goBack}
          className="inline-flex hover:scale-105 transition ease-out gap-x-2 bg-white dark:bg-darkBlue-el rounded-md shadow-md px-4 py-2  items-center"
        >
          <ArrowLeftIcon className="h-6" />
          Back
        </button>
      </div>

      {/* Country Section  */}
      <section className="flex gap-x-10 my-6 w-[97%] md:w-[95%] mx-auto flex-col md:flex-row items-center">
        {/* Country Flag  */}
        <div className="w-[90%] md:w-1/2 relative h-96">
          <Image
            src={country.flags.png}
            layout="fill"
            objectFit="contain"
            alt={country?.name.common}
          />
        </div>

        {/* Country Description  */}
        <div className="flex flex-col gap-y-8 items-start w-[90%] mx-auto md:w-1/3">
          <h3 className="font-semibold text-2xl">{country?.name?.common}</h3>

          <div className="flex flex-col gap-y-6 md:flex-row justify-between w-full">
            <div>
              <p className="font-bold">
                Native Name:{" "}
                <small className="font-light">{country?.name.official}</small>
              </p>
              <p className="font-bold">
                Population:{" "}
                <small className="font-light">{country?.population}</small>
              </p>
              <p className="font-bold">
                Continent:{" "}
                <small className="font-light">{country?.continents}</small>
              </p>
              <p className="font-bold">
                Capital: <small className="font-light">{country.capital}</small>
              </p>
            </div>
            <div>
              <p className="font-bold">
                Top level domain:{" "}
                <small className="font-light">{country?.tld}</small>
              </p>
              <p className="font-bold">
                Currencies:{" "}
                <small className="font-light">
                  {
                    //@ts-ignore
                    Object.values(country.currencies)[0].name
                  }
                </small>
              </p>
              <p className="font-bold">
                Languages:{" "}
                <small className="font-light">
                  {Object.values(country.languages).join(", ")}
                </small>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p className="font-bold text-md flex self-start nowrap">
              Border countries:{" "}
            </p>
            <div className="flex flex-grow self-start w-full overflow-auto md:self-center">
              {borderCountries.map((item: any) => (
                <small
                  onClick={() =>
                    router.push({
                      pathname: "/country",
                      query: { name: item?.name.common },
                    })
                  }
                  key={item?.name.common}
                  className="bg-white cursor-pointer hover:scale-105 transition ease-in-out dark:bg-darkBlue-el mr-2 rounded-md shadow-md py-1 px-2"
                >
                  {item?.name.common}
                </small>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
