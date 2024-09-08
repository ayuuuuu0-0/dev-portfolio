/* eslint-disable react/no-unescaped-entities */

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/1.png";
import firstarticle from "../../public/images/articles/article1.png";
import secondarticle from "../../public/images/articles/article2.jpg";
import article2 from "../../public/images/articles/2.png";
import artciles3 from "../../public/images/articles/3.png";
import artciles4 from "../../public/images/articles/4.png";

import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, link, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Content = ({ title, img, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      whileInView={{ y: 0 }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticles = ({ title, summary, img, link, time }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg "
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm-mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const content = () => {
  return (
    <>
      <Head>
        <title>Ayush | Content Page</title>
        <meta name="description" content="Ayuuu's portfolio website" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Uncover a mosaic of serendipities."
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticles
              title="Video"
              summary="Check out my fun youtube video for superhero related content and reviews."
              time="5 min watch"
              link="https://youtu.be/3rQkVdZaPlE?si=jkrOjoPsJs-OhG9e"
              img={firstarticle}
            />
            <FeaturedArticles
              title="Video"
              summary="Check out my fun youtube video for superhero related content and reviews."
              time="5 min watch"
              link="https://youtu.be/ok6CgW8POJ8?si=VzrbMW8yQA4udzCa"
              img={secondarticle}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 font-mont">
            All Profiles
          </h2>
          <ul>
            <Content
              title="Check Out my letterboxd profile for movie reviews and recommendations 🎬"
              date="Movies"
              link="https://boxd.it/b5U7H"
              img={article1}
            />
            <Content
              title="Check out my youtube channel TheComiConnection for superhero and comic book related content 🦸‍♂️"
              date="Youtube"
              link="https://www.youtube.com/@TheComicConnection"
              img={article2}
            />
            <Content
              title="Checkout my youtube channel TheAnimeConnects for anime related cool stuff 🎌"
              date="Youtube"
              link="/"
              img={artciles3}
            />
            <Content
              title="Check out my twitter profile for daily updates and posts!"
              date="Twitter"
              link="https://x.com/Ayuuuu_25"
              img={artciles4}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default content;
