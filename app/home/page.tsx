import React from "react";
import Nav from "../components/navBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SideBarSocials from "../components/sidebar";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import ScrollToTopButton from "../components/scrollToTopButton";

function Homepage() {
  return (
    <div className="h-screen pl-12 pr-12 pb-6">
      <Nav></Nav>
      <ScrollToTopButton></ScrollToTopButton>
      <div className="firstFrame flex h-[90vh]">
        <SideBarSocials></SideBarSocials>
        <section className="w-[100%] flex items-center justify-center">
          <section>
          <Image src={"/1x1.png"} alt={""} width={350} height={300} className="rounded-full"></Image>
          <h1 className="text-6xl font-bold text-center pt-10 zen_dots text-primary">I am Philip</h1>
          <p className="text-2xl text-center pt-2">Software Developer</p>
          </section>
          
        </section>
        <section className="flex items-center justify-center w-[70%]">
        <section className="border-primary border-2 rounded-3xl p-10 h-auto">
          <p className="text-2xl w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button className="mt-10 text-xl py-6 px-10">Contact Me</Button>
        </section>
        </section>
      </div>
      <div className="secondFrame h-screen flex items-center justify-center">
        <div className="secondFrameContent w-[50%]">
          <h1 className="text-bold zen_dots text-6xl text-center">About Me</h1>
          <p className="text-center text-2xl">a brief description</p>
          <div className="flex items-center justify-center pt-32">
            <Image src="/1x1.png" alt={""} width={350} height={100}></Image>
            <div className="pl-10">
              <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex text-center pt-4">
                <p><span className="text-4xl font-bold zen_dots">3+</span><br></br>Years of Experience</p>
                <p><span className="text-4xl font-bold zen_dots">10+</span><br></br>Software Projects</p>
                <p><span className="text-4xl font-bold zen_dots">5+</span><br></br>Languages & Frameworks</p>
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
      <div className="thirdFrame h-screen flex items-center justify-center">
        <div className="thirdFrameContent">
        <h1 className="text-bold zen_dots text-6xl text-center">Skills</h1>
          <p className="text-center text-2xl">My acquired skills over the years</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
