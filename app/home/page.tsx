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
  FaScroll,
} from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { RiMegaphoneLine, RiNextjsFill } from "react-icons/ri";
import {RecordsAccordion} from "../components/custom-accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ContactForm from "../components/contact";
import { Home } from "../types/api/home";
import { About } from "../types/api/about";
import DynamicComponent from "../components/dynamic-component";
import SkillsBlock from "../components/skills-block";
import { Skill } from "../types/api/skill";
import { SubSkill } from "../types/api/subSkill";
import { fetchSkillsByTableNum } from "../util/fetchSkills";
import CustomCardComponent from "../components/custom-card";
import { fetchCardByTableNum } from "../util/fetch-cards";
import { Card as CardType } from "../types/api/card";
import { Portfolio } from "../types/api/portfolio";
import { Experience } from "../types/api/experience";
import { NavBar } from "../types/api/navbar";
import { fetchNavBar } from "../util/fetch-navbar";


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
  const skillResponse = await fetch("http://127.0.0.1:8000/api/skills", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const portfolioResponse = await fetch("http://127.0.0.1:8000/api/portfolio", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const experienceResponse = await fetch("http://127.0.0.1:8000/api/experience", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const homeData: Home = await homeResponse.json();
  const aboutData: About = await aboutResponse.json();
  const skillData: Skill = await skillResponse.json();
  const portfolioData: Portfolio = await portfolioResponse.json();
  const experienceData:Experience = await experienceResponse.json();  const skillsTable1: SubSkill[] = await fetchSkillsByTableNum(1);
  const skillsTable2: SubSkill[] = await fetchSkillsByTableNum(2);
  const skillsTable3: SubSkill[] = await fetchSkillsByTableNum(3);
  const skillsTable4: SubSkill[] = await fetchSkillsByTableNum(4);
  const skillsTable5: SubSkill[] = await fetchSkillsByTableNum(5);
  const port_1:CardType | null = await fetchCardByTableNum(1);
  const port_2:CardType | null = await fetchCardByTableNum(2);
  const port_3:CardType | null = await fetchCardByTableNum(3);
  const port_4:CardType | null = await fetchCardByTableNum(4);
  const port_5:CardType | null = await fetchCardByTableNum(5);
  const port_6:CardType | null = await fetchCardByTableNum(6);
  const navbarData: NavBar = await fetchNavBar();

  return (
    <div className="h-screen lg:pl-12 lg:pr-12 pb-6">
      <Nav navbarData={navbarData}></Nav>
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
                  <FaDownload className="ml-4" />
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
          <h1 className="text-bold zen_dots text-6xl text-center pt-64 lg:pt-24">
            {skillData.title}
          </h1>
          <p className="text-center text-2xl">{skillData.subtitle}</p>
          <div className="flex flex-wrap justify-center pt-24">
            <div>
              <div>
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-6 font-thin rounded-2xl"
                >
                  {skillData.section_one}
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <SkillsBlock skills={skillsTable1} />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-6 font-thin rounded-2xl"
                >
                  {skillData.section_two}
                </Badge>
                <div className="flex justify-center">
                  <div>
                  <SkillsBlock skills={skillsTable2} />
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
                  {skillData.section_three}
                </Badge>
                <div className="flex justify-center">
                  <div>
                  <SkillsBlock skills={skillsTable3} />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-16 font-thin rounded-2xl"
                >
                  {skillData.section_four}
                </Badge>
                <div className="flex justify-center">
                  <div>
                  <SkillsBlock skills={skillsTable4} />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Badge
                  variant={"outline"}
                  className="text-xl py-2 px-20 font-thin"
                >
                  {skillData.section_five}
                </Badge>
                <div className="flex justify-center">
                  <div>
                    <SkillsBlock skills={skillsTable5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center mt-96 lg:mt-48 lg:pt-80"
        id="fourthFrame"
      >
        <div id="fourthFrameContent">
          <h1 className="text-bold zen_dots text-4xl md:text-6xl text-center pt-64 lg:pt-24">
            {experienceData.title}
          </h1>
          <p className="text-center text-2xl">{experienceData.subtitle}</p>
          <RecordsAccordion tableNum={1} icon={<DynamicComponent iconName={experienceData.section_one_icon} className="size-32 fill-primary" />} title={experienceData.section_one_text} />
          <RecordsAccordion tableNum={2} icon={<DynamicComponent iconName={experienceData.section_two_icon} className="size-32 fill-primary" />} title={experienceData.section_two_text} />
        </div>
      </div>
      <div
        className="h-screen flex items-center justify-center mt-96 lg:pt-48"
        id="fifthFrame"
      >
        <div id="fifthFrameContent">
          <h1 className="text-bold zen_dots text-4xl md:text-6xl text-center mt-96 pt-96 lg:pt-24 lg:mt-0">
            {portfolioData.title}
          </h1>
          <p className="text-center text-2xl">{portfolioData.subtitle}</p>
          {/* Icon Blocks */}
          <div className="container py-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
              <CustomCardComponent card={port_1} />
              <CustomCardComponent card={port_2} />
              <CustomCardComponent card={port_3} />
              <CustomCardComponent card={port_4} />
              <CustomCardComponent card={port_5} />
              <CustomCardComponent card={port_6} />
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
