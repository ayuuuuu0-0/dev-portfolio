/* eslint-disable react/no-unescaped-entities */

import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import projectfirst from "../../public/images/projects/1.png";
import projectsecond from "../../public/images/projects/2.png";
import projectthird from "../../public/images/projects/3.png";
import projectfourth from "../../public/images/projects/4.png";
import projectfifth from "../../public/images/projects/5.png";
import projectsixth from "../../public/images/projects/project6.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12  dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark font-mont xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light font-mont sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light  sm:text-sm font-mont">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark font-mont
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg dark:bg-dark"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base font-mont">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl font-mont">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold font-mont underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const project = () => {
  return (
    <>
      <Head>
        <title>Ayush | Projects Page</title>
        <meta name="description" content="Ayuuu's portfolio website" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Eclectic Expressions: A Multifaceted Creative Journey"
            className="text-6xl mb-16 lg:text-7xl sm:mb-8 sm:!text-5xl xs:!text-4xl font-bold font-mont"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Jobify"
                summary="A React based job seeking web app made with tanstack query, user authentication, profiles, posting and accepting jobs."
                link="https://github.com/ayuuuuu0-0/jobify"
                type="Featured Project"
                github="https://github.com/ayuuuuu0-0/jobify"
                img={projectfirst}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NewsMania"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/ayuuuuu0-0/news-app"
                type="Featured Project"
                github="https://github.com/ayuuuuu0-0/news-app"
                img={projectsecond}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SheSecure"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/ayuuuuu0-0/SheSecure"
                type="Featured Project"
                github="https://github.com/ayuuuuu0-0/SheSecure"
                img={projectfourth}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="College Cart"
                summary="A Flutter based application for college students to sell and buy all products for college necessities with user authentication, profiles, multimedia post creation."
                link="https://college-cart.vercel.app/"
                type="Featured Project"
                github="https://github.com/ayuuuuu0-0/Uniconnect"
                img={projectthird}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NowAcquire"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/ayuuuuu0-0/now-acquire"
                type="Featured Project"
                github="https://github.com/ayuuuuu0-0/now-acquire"
                img={projectfifth}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Memory Revived"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/ayuuuuu0-0/memory_revived"
                type="Featured Project"
                github="https://github.com/ayuuuuu0-0/memory_revived"
                img={projectsixth}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
