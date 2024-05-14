"use client";

import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaBriefcase } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { Record } from '../types/api/record';
import { fetchRecordsByTableNum } from '../util/fetch-records';

const RecordsAccordion: React.FC<{ tableNum: number, icon: React.ReactNode, title: string }> = ({ tableNum, icon, title }) => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    async function getRecords() {
      const fetchedRecords = await fetchRecordsByTableNum(tableNum);
      setRecords(fetchedRecords);
    }

    getRecords();
  }, [tableNum]);

  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value={`item-${tableNum}`} className="border-2 rounded-xl mt-10">
        <AccordionTrigger className="text-center justify-center px-10 font-light text-xl ml-2">
          <div>
            {icon}
            <br />
            {title}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex justify-center">
            <div>
              {records.map(record => (<div>
                  <br />
                  <div className="text-xl font-light text-center">
                    {record.record_year}
                  </div>
                  <div className="text-xl font-bold text-center">
                    {record.record_title}
                  </div>
                  <div className="text-xl font-light text-center text-primary">
                    {record.record_subtitle}
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const EducationAccordion: React.FC = () => {
  return (
    <RecordsAccordion tableNum={1} icon={<GiGraduateCap className="size-32 fill-primary" />} title="Education" />
  );
};

export const WorkAccordion: React.FC = () => {
  return (
    <RecordsAccordion tableNum={2} icon={<FaBriefcase className="size-32 fill-primary" />} title="Work" />
  );
};
