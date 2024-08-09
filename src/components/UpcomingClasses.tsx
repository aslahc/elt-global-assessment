import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../shadcncomponents/ui/table";
import { Button } from "../shadcncomponents/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../shadcncomponents/ui/card";
import { Checkbox } from "../shadcncomponents/ui/checkbox";

const UpcomingClasses = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4 h-auto">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Upcoming classes</CardTitle>
            <CardDescription>For next 7 days</CardDescription>
          </div>
          <div className="flex items-center space-x-2 mr-4">
            <span className="text-sm text-black  font-medium ">
              Booked only
            </span>
            <Checkbox />
          </div>
        </CardHeader>
        <CardContent className="gap-[13px]">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow className="">
                <TableHead>Class name</TableHead>
                <TableHead>Staff name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className=" font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter whitespace-nowrap">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="flex items-center space-x-1 text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="font-semibold text-red-500">Live</span>
                        <span className="text-gray-500">(0:54)</span>
                      </div>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="custom"
                    size="custom"
                    className="bg-blue-500 hover:bg-blue-600 rounded-[0.345rem] text-white font-semibold py-2 px-4  flex items-center space-x-2"
                  >
                    <span>Join now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-items-center space-x-2 text-blue-500 font-bold pl-3">
                    <span>2:40:34</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-400 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-items-center space-x-2 date-text font-bold pl-3">
                    <span>3 days</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    {/* Number */}
                    <span className="self-center text-muted-foreground text-gray-400 font-medium pr-2">
                      1
                    </span>

                    {/* Class Name and Date & Time */}
                    <div className="flex flex-col justify-between">
                      {/* Class Name */}
                      <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter">
                        Design Hierarchy
                      </span>

                      {/* Date & Time */}
                      <div className="text-[13px] text-gray-500 font-normal ">
                        21st June 10am
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                      alt="Guy Hawkins"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="grid">
                      <div className="font-semibold">Suriya R</div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        Additional details
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingClasses;
