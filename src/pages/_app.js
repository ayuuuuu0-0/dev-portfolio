// import Footer from "@/components/footer";
// import NavBar from "@/components/NavBar";
// import "@/styles/globals.css";
// import { Montserrat } from "next/font/google";
// import Head from "next/head";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-mont",
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main
//         className={`${montserrat.variable} font- bg-light dark:bg-dark w-full min-h-screen`}
//       >
//         <NavBar />
//         <Component {...pageProps} />;
//         <Footer />
//       </main>
//     </>
//   );
// }

import React, { useEffect } from "react";
import Footer from "@/components/footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import useThemeSwitcher from "@/hooks/useThemeSwitcher"; // Make sure this path is correct

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const [mode] = useThemeSwitcher();

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
