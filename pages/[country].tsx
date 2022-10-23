import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// export async function getServerSideProps() {}

export default function Country() {
  const router = useRouter();

  // router.query.country

  const goBack = () => router.push("/");

  return (
    <main>
      <>
        <Head>
          <title>Country</title>
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
        <div className="w-[90%] md:w-1/2 relative h-40">
          <Image src={require("../assets/vercel.svg")} layout="fill" />
        </div>

        {/* Country Description  */}
        <div className="flex flex-col gap-y-4 items-start w-[90%] mx-auto md:w-1/3">
          <h3 className="font-semibold text-2xl">Tanzania</h3>

          <div className="flex flex-col gap-y-6 md:flex-row justify-between w-full">
            <div>
              <p className="font-bold">
                Native Name: <small className="font-light">Bongo</small>
              </p>
              <p className="font-bold">
                Population: <small className="font-light">45000000</small>
              </p>
              <p className="font-bold">
                Continent: <small className="font-light">Africa</small>
              </p>
              <p className="font-bold">
                Capital: <small className="font-light">Dodoma</small>
              </p>
            </div>
            <div>
              <p className="font-bold">
                Top level domain: <small className="font-light">.tz</small>
              </p>
              <p className="font-bold">
                Currencies: <small className="font-light">Tsh, USD</small>
              </p>
              <p className="font-bold">
                Languages:{" "}
                <small className="font-light">Swahili, Englsih</small>
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold">
              Border countries:{" "}
              <small className="bg-white dark:bg-darkBlue-el rounded-md shadow-md py-1 px-2">
                Kenya
              </small>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
