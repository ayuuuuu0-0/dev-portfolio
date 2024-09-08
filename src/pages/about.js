import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import porfilepic from "../../public/images/profile/profile_pic.jpg";
import Image from "next/image";
import { spring, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/transitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <>
        <Head>
          <title>Ayush | About Page</title>
          <meta name="description" content="Ayuuu's portfolio website" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-content dark:text-light">
          <Layout>
            <AnimatedText
              text="Passionate creator of eclectic experiences."
              className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl !text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 font-mont">
                  About Me
                </h2>
                <p className="font-medium font-mont">
                  Hey there, I'm Ayush, your friendly neighborhood Flutter Dev
                  and full-stack developer! 🧙‍♂️ I've got a knack for turning
                  pixelated dreams into reality, with a sprinkle of UI/UX magic.
                  From crafting stunning mobile apps to building robust web
                  platforms, I'm your go-to guy for all things digital. So,
                  let's create something awesome together! 🚀
                </p>
                <p className="my-4 font-medium font-mont">
                  Design isn't just about slapping on a pretty coat of paint –
                  it's about diving deep into the nitty-gritty and crafting
                  experiences that make users go 'Whoa, this is cool!' ✨ By
                  solving problems with a sprinkle of creativity, I'm turning
                  digital experiences into delightful adventures
                </p>
                <p className="font-medium font-mont">
                  Like Spider-Man swinging through the city, I'm always on the
                  lookout for new challenges to conquer. 🕷️ From web development
                  to UI/UX design, I'm ready to tackle any project that comes my
                  way.
                </p>
              </div>
              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark p-8 dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <Image
                  src={porfilepic}
                  alt="Ayush"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
                />
              </div>

              <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                <div className="flex flex-col items-end justify-center xl:items-center ">
                  <span className="inline-block text-7xl font-bold font-mont md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={20} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm font-mont">
                    projects completed
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold font-mont md:text-6xl sm:text-5xl xs:text-4xl ">
                    <AnimatedNumbers value={2} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm font-mont">
                    years of experience
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold font-mont md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={10} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm font-mont ">
                    Events Organized
                  </h2>
                </div>
              </div>
            </div>
            <Skills />
            <Experience />
            <Education />
          </Layout>
        </main>
      </>
    </div>
  );
};

export default about;
