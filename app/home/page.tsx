import React from "react";
import Nav from "../components/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SideBarSocials from "../components/sidebar";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import ScrollToTopButton from "../components/scrollToTopButton";
import {
  FaAndroid,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCss3,
  SiFlutter,
  SiJavascript,
  SiKotlin,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { DiMysql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import {EducationAccordion, WorkAccordion} from "../components/custom-accordion";

function Homepage() {
  return (
    <div className="h-screen lg:pl-12 lg:pr-12 pb-6">
      <Nav></Nav>
      <ScrollToTopButton></ScrollToTopButton>
      <div className="firstFrame flex h-screen flex-wrap justify-center w-full">
        <SideBarSocials></SideBarSocials>
        <section className="w-1/2 md:w-10/12 lg:w-1/3 flex items-center justify-center ml-6 md:ml-1 md:mr-12 lg:ml-10">
          <section>
            <Image
              src={"/1x1.png"}
              alt={""}
              width={350}
              height={300}
              className="rounded-full"
            ></Image>
            <h1 className="text-3xl lg:text-6xl font-bold text-center pt-4 lg:pt-10 zen_dots text-primary">
              I am Philip
            </h1>
            <p className="text-m lg:text-2xl text-center pt-4 text-muted-foreground">
              Software Developer
            </p>
          </section>
        </section>
        <section className="flex lg:items-center justify-center w-5/6 md:w-8/12 lg:w-5/12 mt-10">
          <section className="border-primary border-2 rounded-3xl p-10 h-auto">
            <p className="text-xl w-11/12 lg:text-2xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button className="mt-10 text-xl py-6 px-10">Contact Me</Button>
          </section>
        </section>
      </div>
      <div
        className="h-screen flex items-center justify-center"
        id="secondFrame"
      >
        <div className="w-full lg:w-2/3 mt-80 lg:mt-40" id="secondFrameContent">
          <h1 className="text-bold zen_dots text-6xl text-center">About Me</h1>
          <p className="text-center text-2xl">a brief description</p>
          <div className="flex flex-wrap items-center justify-center pt-32">
            <Image
              src="/about.jpg"
              alt={""}
              width={400}
              height={100}
              className="w-full p-5 md:w-5/12"
            ></Image>
            <div className="p-5 md:pl-10 w-full md:w-1/2 mt-10">
              <p className="text-2xl inter-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex text-center justify-between pt-4">
                <p>
                  <span className="text-4xl font-bold zen_dots">3+</span>
                  <br></br>Years of Experience
                </p>
                <p>
                  <span className="text-4xl font-bold zen_dots">10+</span>
                  <br></br>Software Projects
                </p>
                <p>
                  <span className="text-4xl font-bold zen_dots">5+</span>
                  <br></br>Languages & Frameworks
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center pt-4">
                <Button className="p-6">
                  <Link href={""}>Download CV</Link>
                  <DownloadIcon className="ml-4"></DownloadIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center mt-96 lg:mt-48"
        id="thirdFrame"
      >
        <div id="thirdFrameContent">
          <h1 className="text-bold zen_dots text-6xl text-center pt-64 lg:pt-0">
            Skills
          </h1>
          <p className="text-center text-2xl">
            My acquired skills over the years
          </p>
          <div className="flex flex-wrap justify-center pt-32">
            <div>
              <div>
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-6 font-thin rounded-2xl"
                >
                  Backend Development
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <div className="flex items-center mt-8 font-light text-xl">
                      <FaJava className="mr-4 fill-primary" /> Java
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <FaPython className="mr-4 fill-primary" /> Python
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <SiKotlin className="mr-4 fill-primary" /> Kotlin
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-6 font-thin rounded-2xl"
                >
                  Frontend Development
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <div className="flex items-center mt-8 font-light text-xl">
                      <FaHtml5 className="mr-4 fill-primary" /> HTML
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <SiCss3 className="mr-4 fill-primary" /> CSS
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <BsFiletypeXml className="mr-4 fill-primary" /> XML
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <SiJavascript className="mr-4 fill-primary" /> JS
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <SiTypescript className="mr-4 fill-primary" /> TS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:ml-20">
              <div>
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-12 font-thin rounded-2xl"
                >
                  Database Design
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <div className="flex items-center mt-8 font-light text-xl">
                      <DiMysql className="mr-4 fill-primary" /> MySQL
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-16 font-thin rounded-2xl"
                >
                  Frameworks
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <div className="flex items-center mt-8 font-light text-xl">
                      <RiNextjsFill className="mr-4 fill-primary" /> NextJS
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <FaAndroid className="mr-4 fill-primary" /> Android
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <SiFlutter className="mr-4 fill-primary" /> Flutter
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <FaLaravel className="mr-4 fill-primary" /> Laravel
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <SiPrisma className="mr-4 fill-primary" /> Prisma
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-20 font-thin"
                >
                  Libraries
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <div className="flex items-center mt-8 font-light text-xl">
                      <SiTailwindcss className="mr-4 fill-primary" /> Tailwind
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <FaReact className="mr-4 fill-primary" /> React
                    </div>
                    <div className="flex items-center mt-2 font-light text-xl">
                      <FaJava className="mr-4 fill-primary" /> JavaFx
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center mt-96 lg:mt-48"
        id="fourthFrame"
      >
        <div id="fourthFrameContent">
          <h1 className="text-bold zen_dots text-6xl text-center pt-64 lg:pt-0">
            Experience
          </h1>
          <p className="text-center text-2xl">Where I currently stand</p>
          <EducationAccordion></EducationAccordion>
          <WorkAccordion></WorkAccordion>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
