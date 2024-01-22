// pages/index.tsx
import React from "react";
import { JobCard } from "@/components/dashboard/dashboard";
import { jobData } from "@/data/jobData";
const NewJob = () => {
  

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {jobData
      .map((jobData, index) => (
        <JobCard key={index} jobData={jobData} />
      ))}
    </div>
  );
};

export default NewJob;
