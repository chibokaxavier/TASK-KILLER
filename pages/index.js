import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`h-screen w-screen p-4 bg-gradient-to-r from-[#7A3E3E] to-[#482121]`}
    >
      <Head>
        <title>ToDo App</title>
      </Head>
    </main>
  );
}
