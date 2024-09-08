import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-11/12 border-t-2 border-solid border-gray-400
    font-medium text-lg mx-auto dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-6 md:py-4 sm:py-2">
        {/* <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span> */}
        <div className="flex items-center font-mont whitespace-nowrap">
          Lets build something great together{" "}
          <span className="text-2xl px-1" style={{ color: "#C3A5F5" }}>
            &#9829;
          </span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
