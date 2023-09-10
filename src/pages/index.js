import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import heroImage from "../../public/images/profile/software_developer_final.png";
import lightBulbImage from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | John Vehikite</title>
        <meta
          name="Portfolio - John Vehikite"
          content="Portfolio home page for fullstack Software Engineer John Vehikite"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center bg-light text-dark w-full min-h-screen md:min-h-min">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={heroImage}
                alt="John Vehikite"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Software visions realized"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a proficient and experienced fullstack engineer, I revel in
                producing software solutions to complex problems. Take a look
                around and explore my skills, experience, and projects, and see
                why companies and businesses trust me with creating their
                software.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:johncookv@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulbImage}
            alt="light bulb"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
