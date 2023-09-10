import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import plastiqImage from "../../public/images/projects/plastiq.png";
import adcetrisImage from "../../public/images/projects/giant_adcetris.png";
import kyprolisImage from "../../public/images/projects/giant_kyprolis.png";
import portfolioImage from "../../public/images/projects/portfolio.png";
import millbraeImage from "../../public/images/projects/calvano_millbrae.png";
import tbImage from "../../public/images/projects/calvano_terra_bella.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p4"
    >
      <div class="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm ">{summary}</p>
        <div className="mt-2 flex items-center">
          {githubLink && (
            <Link className="w-10 mr-4" href={githubLink} target="_blank">
              <GithubIcon />
            </Link>
          )}
          <Link
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative xs:p-4"
    >
      <div class="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          {githubLink && (
            <Link className="w-8 md:w-6" href={githubLink} target="_blank">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page | John Vehikite</title>
        <meta
          name="Projects - John Vehikite"
          content="Information about projects done by John Vehikite"
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center bg-light text-dark ">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Every project has its challenges with its rewards"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Plastiq"
                img={plastiqImage}
                summary={`Implemented multiple features in all of Plastiq's offerings (Plastiq Pay, Accept, and Connect), including PCI-compliant
                add a card component, two factor authentication, password reset, user settings, payment approvals, add bank account, type-ahead search, 
                Bills Management System with accounting software integration, and much more.`}
                link="https://grow.plastiq.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Evoke Giant Project"
                title="Adcetris"
                img={adcetrisImage}
                link="https://www.adcetris.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Evoke Giant Project"
                title="Kyprolis"
                img={kyprolisImage}
                link="https://www.kyprolis.com/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Portfolio website"
                img={portfolioImage}
                summary={`Along with showcasing my past work, I wanted to practice new technologies I have been learning,
                including NextJS, Tailwind, Framer Motion, Vercel, and more.`}
                link="/"
                githubLink="https://github.com/johncookv/vehikite-nextjs-portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Calvano Development Project"
                title="Millbrae Station"
                img={millbraeImage}
                link="https://millbraestation.com/"
                githubLink="https://github.com/johncookv/calvano-millbrae-station-update"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 lg:mb-16">
              <Project
                type="Calvano Development Project"
                title="Terra Bella"
                img={tbImage}
                link="https://1075terrabella.com/"
                githubLink="https://github.com/johncookv/calvano-terra-bella"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
