import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-11/12 border-t-2 border-solid border-gray-400
    font-medium text-lg mx-auto
    "
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
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
