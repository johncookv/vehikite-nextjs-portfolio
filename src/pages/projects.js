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

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          {githubLink && (
            <Link className="w-10 mr-4" href={githubLink} target="_blank">
              <GithubIcon />
            </Link>
          )}
          <Link
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    border border-solid border-dark bg-light p-6 relative"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          {githubLink && (
            <Link className="w-8" href={githubLink} target="_blank">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16"
            text="Every project has its challenges with its rewards"
          />
          <div className="grid grid-cols-12 gap-24">
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
            <div className="col-span-6">
              <Project
                type="Evoke Giant Project"
                title="Adcetris"
                img={adcetrisImage}
                link="https://www.adcetris.com/"
              />
            </div>
            <div className="col-span-6">
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
            <div className="col-span-6">
              <Project
                type="Calvano Development Project"
                title="Millbrae Station"
                img={millbraeImage}
                link="https://millbraestation.com/"
                githubLink="https://github.com/johncookv/calvano-millbrae-station-update"
              />
            </div>
            <div className="col-span-6">
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
