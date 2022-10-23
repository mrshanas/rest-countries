import Head from "next/head";

export async function getServerSideProps() {}

export default function Country() {
  return (
    <main>
      <>
        <Head>
          <title>Country</title>
        </Head>
      </>
      <h1>Country</h1>
    </main>
  );
}
