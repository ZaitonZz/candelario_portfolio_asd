"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export function EducationAccordion() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1" className="border-2 rounded-xl mt-10">
          <AccordionTrigger className="text-center justify-center px-10 font-light text-xl ml-2">
            <div>
              <GiGraduateCap className="size-32 fill-primary" />
              <br />
              Education
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center">
              <div>
                <br></br>
                <div className="text-xl font-light text-center">
                  2009 - 2020
                </div>
                <div className="text-xl font-bold text-center">
                  Soli Deo Gloria Christian Academy
                </div>
                <div className="text-xl font-light text-center text-primary">
                  Kindergarten - High School
                </div>
                <br></br>
                <div className="text-xl font-light text-center">
                  2020 - 2022
                </div>
                <div className="text-xl font-bold text-center">
                  Mapua Malayan Colleges Mindanao
                </div>
                <div className="text-xl font-light text-center text-primary">
                  Senior High School
                </div>
                <br></br>
                <div className="text-xl font-light text-center">
                  20022 - Present
                </div>
                <div className="text-xl font-bold text-center">
                  University of Southeastern Philippines
                </div>
                <div className="text-xl font-light text-center text-primary">
                  College (BSIT-IS)
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function WorkAccordion() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1" className="border-2 rounded-xl mt-10">
          <AccordionTrigger className="text-center justify-center px-10 font-light text-xl ml-2">
            <div>
              <FaBriefcase className="size-32 fill-primary" />
              <br />
              Work
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center">
              <div>
              <br></br>
                <div className="text-xl font-light text-center">
                  2024
                </div>
                <div className="text-xl font-bold text-center">
                  RMCI-RHM Website Design
                </div>
                <div className="text-xl font-light text-center text-primary">
                  <Link href={"https://rmci.test"}>Website</Link>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
