import React from "react";
import Nav from "../components/navBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Homepage() {
  return (
    <div className="h-screen pl-12 pr-12 py-6">
      <Nav></Nav>
      <div className="firstFrame flex">
        <section>
          <Image src={""} alt={""} className="rounded-full"></Image>
          <h1 className="text-4xl font-bold">I am Philip</h1>
          <p className="text-xl">Software Developer</p>
        </section>
        <section>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button>Learn More</Button>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
