// components/JobCard.tsx
import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
import { FaLocationDot } from "react-icons/fa6";



function MyComponent () {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}

type JobCardProps = React.ComponentProps<typeof Card> & {
    jobData: {
        user_id: string;
        company: string;
        roles: string;
        locations: string;
        type: string;
        experience: string;
        salary: string;
        skills: string[];
        count: string;
        candidates: {};
        created_at: string;
    };
};

export const JobCard: React.FC<JobCardProps> = ({ className, jobData, ...props }) => (
    <div className="w-full">
        <Card className={`w-full  ${className}`} {...props}>
            <CardHeader>
                <CardTitle>{jobData.company}</CardTitle>
                <CardDescription>{jobData.roles}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>{jobData.company.charAt(0)}</AvatarFallback>
                    </Avatar>
                <div>

                <div className="flex space-x-2 ">
                    <p className="">Skills:</p>
                    {jobData.skills.map((skill, index) => (
                        <Badge key={index} >
                            {skill}
                        </Badge>
                    ))}
                </div>
                <div className="flex  mt-4 space-x-2">
                    <Badge variant={"secondary"}><FaLocationDot className="mr-2"/>{jobData.locations}</Badge>
                    <Badge variant={"secondary"}>{jobData.experience}</Badge>

                </div>
                <div className="mt-4">
                    <Badge className="p-1" variant={"outline"}>{jobData.type}</Badge>
                </div>
                    </div>
                </div>
                {/* Add more content based on your job data */}
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" /> Apply Now
                </Button>
            </CardFooter>
        </Card>
    </div>
);
