import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profileImage from "../../public/images/profile/john_vehikite_profile_pic_white_bg.png";
import Image from "next/image";
import { useInView, useSpring, useMotionValue } from "framer-motion";
import Skills from "@/components/Skills";
import AnimatedList from "@/components/AnimatedList";
import { occupations, educations } from "@/content/content";

const AnimatedNumber = ({ value }) => {
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
  });

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Page | John Vehikite</title>
        <meta
          name="About - John Vehikite"
          content="Information about Fullstack Software Engineer John Vehikite"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Price of Greatness = responsibility"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                {`Hi, I'm John Vehikite, an educator turned software engineer. I have always had a passion for helping
                people and for technology, and this career path has been a beautiful marriage of both. I have assisted
                my clients and companies achieve their goals through software I have developed. I take pride in providing
                elegant technical solutions to complete all of my projects within tight deadlines. Collaboration with teammates,
                company leaders, and customers is a pleasure to do since that allows ideas to flourish and develop.`}
              </p>

              <p className="my-4 font-medium">
                {`Though I have gained diverse skills and learned many different technologies, I love to keep learning and growing.
                Continued education, learning from mentors and mentees, feedback from managers, coworkers, and
                clients, sprint retrospectives, and practicing new and exciting tech stacks help me to evolve as an engineer.`}
              </p>

              <p className="font-medium">
                {`Technology isn't the passion that completely drives me however. My family -- beautiful wife Norma and four amazing
                children -- is the driving force in my life. They make all of me better, including the software engineering side of me, so much so that my software company name, ZAV Dev Tech, includes my childrens'
                initials (yes, they all have the same ZAV initials). I am excited to show you the type of software an inspired father and husband can create!`}
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profileImage}
                alt="John Vehikite"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={100} />s
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  completed projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  mentees assisted
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <AnimatedList listTitle="Experience" items={occupations} />
          <AnimatedList listTitle="Education" items={educations} />
        </Layout>
      </main>
    </>
  );
};

export default about;
