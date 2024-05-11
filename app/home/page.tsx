import React from "react";
import Nav from "../components/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SideBarSocials from "../components/sidebar";
import Link from "next/link";
import ScrollToTopButton from "../components/scrollToTopButton";
import {
  FaAndroid,
  FaArchive,
  FaBriefcase,
  FaCarrot,
  FaDownload,
  FaGithub,
  FaHospital,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPython,
  FaReact,
  FaScroll,
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
import { RiMegaphoneLine, RiNextjsFill } from "react-icons/ri";
import {
  EducationAccordion,
  WorkAccordion,
} from "../components/custom-accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ContactForm from "../components/contact";
import { Home } from "../types/api/home";
import { About } from "../types/api/about";
import DynamicComponent from "../components/dynamic-component";


async function Homepage() {
  const homeResponse = await fetch("http://127.0.0.1:8000/api/home", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  
  const aboutResponse = await fetch("http://127.0.0.1:8000/api/about", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const homeData: Home = await homeResponse.json();
  const aboutData: About = await aboutResponse.json();
  console.log(aboutData);
  return (
    <div className="h-screen lg:pl-12 lg:pr-12 pb-6">
      <Nav></Nav>
      <DynamicComponent iconName="FaGithub" className="fill-primary size-10"></DynamicComponent>
      <ScrollToTopButton></ScrollToTopButton>
      <div className="firstFrame flex h-screen flex-wrap justify-center w-full">
        <SideBarSocials></SideBarSocials>
        <section className="w-1/2 md:w-10/12 lg:w-1/3 flex items-center justify-center ml-6 md:ml-1 md:mr-12 lg:ml-10">
          <section>
            <Image
              src={`${homeData.photo}`}
              alt={""}
              width={350}
              height={300}
              className="rounded-full"
            ></Image>
            <h1 className="text-3xl lg:text-6xl font-bold text-center pt-4 lg:pt-10 zen_dots text-primary">
              {homeData.title}
            </h1>
            <p className="text-m lg:text-2xl text-center pt-4 text-muted-foreground">
              {homeData.designation}
            </p>
          </section>
        </section>
        <section className="flex lg:items-center justify-center w-5/6 md:w-8/12 lg:w-5/12 mt-10">
          <section className="border-primary border-2 rounded-3xl p-10 h-auto">
            <p className="text-xl w-11/12 lg:text-2xl font-light">
              {homeData.description}
            </p>
            <Button className="mt-10 text-xl py-6 px-10" asChild>
              <Link href={homeData.button_link}>{homeData.button_text}</Link>
            </Button>
          </section>
        </section>
      </div>
      <div
        className="h-screen flex items-center justify-center"
        id="secondFrame"
      >
        <div className="w-full lg:w-2/3 mt-80 lg:mt-40" id="secondFrameContent">
          <h1 className="text-bold zen_dots text-6xl text-center">{aboutData.title}</h1>
          <p className="text-center text-2xl">{aboutData.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center pt-32">
            <Image
              src={`${aboutData.photo}`}
              alt={""}
              width={400}
              height={100}
              className="w-full p-5 md:w-5/12"
            ></Image>
            <div className="p-5 md:pl-10 w-full md:w-1/2 mt-10">
              <p className="text-2xl inter-light">
                {aboutData.description}
              </p>
              <div className="flex text-center justify-between pt-4">
                <p>
                  <span className="text-4xl font-bold zen_dots">{aboutData.years_number}</span>
                  <br></br>{aboutData.years_text}
                </p>
                <p>
                  <span className="text-4xl font-bold zen_dots">{aboutData.projects_number}</span>
                  <br></br>{aboutData.projects_text}
                </p>
                <p>
                  <span className="text-4xl font-bold zen_dots">{aboutData.frameworks_number}</span>
                  <br></br>{aboutData.frameworks_text}
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center pt-4">
                <Button className="p-6">
                  <Link download href={`${aboutData.button_link}`}>
                    {aboutData.button_text}
                  </Link>
                  <FaDownload className="ml-4"/>
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
          <p className="text-center text-2xl">What I have honed</p>
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
          <h1 className="text-bold zen_dots text-4xl md:text-6xl text-center pt-64 lg:pt-24">
            Experience
          </h1>
          <p className="text-center text-2xl">Where I currently stand</p>
          <EducationAccordion></EducationAccordion>
          <WorkAccordion></WorkAccordion>
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center mt-96 lg:mt-72"
        id="fifthFrame"
      >
        <div id="fifthFrameContent">
          <h1 className="text-bold zen_dots text-4xl md:text-6xl text-center pt-64 lg:pt-24">
            Portfolio
          </h1>
          <p className="text-center text-2xl">What I have done so far</p>
          {/* Icon Blocks */}
          <div className="container py-24 lg:py-32">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
              {/* Card */}
              <Card className="h-80 md:h-72 xl:h-64">
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <RiMegaphoneLine className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Talasalitaan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    It is a mobile application designed to teach the different
                    dialects of Mindanao in a gamified dictionary
                    <div className="pt-2">
                      <Link
                        href={"https://github.com/ZaitonZz/Group14_Capstone"}
                      >
                        <FaGithub className="size-5 lg:size-8"/>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card className="h-80 md:h-72 xl:h-64">
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <FaCarrot className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Food Vault</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    It is a mobile application designed to be a repository of
                    recipes around the world complete with dietary information,
                    calorie count, and recipe builder.
                    <div className="pt-2">
                      <Link href={"https://github.com/ZaitonZz/FoodVault"}>
                        <FaGithub className="size-5 lg:size-8"></FaGithub>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card className="h-80 md:h-72 xl:h-64">
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <FaBriefcase className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Portfolio (Flutter)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    It is my portfolio created using the Flutter Framework
                    during my training in DICT.
                    <div className="pt-2">
                      <Link
                        href={
                          "https://github.com/ZaitonZz/candelario_portfolio"
                        }
                      >
                        <FaGithub className="size-5 lg:size-8"/>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card className="h-80 md:h-72 xl:h-64">
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <FaScroll className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Sage Sayings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    It is a mobile application designed to showcase the book of
                    Proverbs using linkedlists.
                    <div className="pt-2">
                      <Link href={"https://github.com/ZaitonZz/SageSayings"}>
                        <FaGithub className="size-5 lg:size-8"/>                      
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card className="h-80 md:h-72 xl:h-64">
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <FaHospital className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>RMCI-RHM Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    It is a website commission to be designed for the Rivera
                    Heart and Metabolism Center, an office of the Rivera Medical
                    Center Inc.
                    <div className="pt-2">
                      <Link href={"https://github.com/ZaitonZz/RMCI-Website"}>
                        <FaGithub className="size-5 lg:size-8"/>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card className="h-80 md:h-72 xl:h-64">
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <FaArchive className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>BRMS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    It is a digital platform designed to streamline processes
                    for local government units at the barangay level in the
                    Philippines.
                    <div className="pt-2">
                      <Link
                        href={"https://github.com/ZaitonZz/Group14_Capstone"}
                      >
                        <FaGithub className="size-5 lg:size-8"/>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
            </div>
          </div>
          {/* End Icon Blocks */}
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center mt-96 lg:mt-48 pt-96 md:pt-0"
        id="sixthFrame"
      >
        <div id="sixthFrameContent">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
