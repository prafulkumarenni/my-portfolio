import Head from "next/head";
import { Inter } from "next/font/google";
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Contacts from "@/components/contact-me/contacts";
import Skills from "@/components/skils/skills";
import Projects from "@/components/projects/project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Praful Enni</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
