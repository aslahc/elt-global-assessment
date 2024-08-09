import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../shadcncomponents/ui/table";
import BookNowBtn from "../Buttons/BookNowBtn";
import CountdownTIme from "../Buttons/CountdownTIme";
import LiveJoinBtn from "../Buttons/LiveJoinBtn";

const ClassTable: React.FC = () => {
  const classes = useSelector((state: RootState) => state.classes.classes);
  console.log("got classes", classes);

  return (
    <Table>
      <TableHeader className="bg-gray-100 dark:bg-gray-700">
        <TableRow className="bg-gray-100 dark:bg-gray-700">
          <TableHead>Class name</TableHead>
          <TableHead>Staff name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classes.map((classItem) => (
          <TableRow key={classItem.id} className="bg-gray-100 dark:bg-gray-700">
            <TableCell>
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <span className="self-center text-muted-foreground text-gray-400 dark:text-gray-500 font-medium pr-2">
                  1
                </span>
                <div className="flex flex-col justify-between">
                  <span className="font-semibold text-[14px] leading-[18px] tracking-[-0.05px] font-inter whitespace-nowrap dark:text-white">
                    {classItem.name}
                  </span>
                  <div className="flex items-center space-x-1 text-sm">
                    {classItem.Live ? (
                      <>
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="font-semibold text-red-500">Live</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          ({classItem.time})
                        </span>
                      </>
                    ) : (
                      <div className="text-[13px] text-gray-500 dark:text-gray-400 font-normal">
                        22nd June 2pm
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <img
                  src={classItem.imgSrc}
                  alt={classItem.staff}
                  className="h-9 w-9 rounded-full"
                />
                <div className="grid">
                  <div className="font-semibold dark:text-white">
                    {classItem.staff}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {classItem.staffDetails}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              {classItem.Live ? (
                <LiveJoinBtn />
              ) : classItem.Booked ? (
                <CountdownTIme targetDate={classItem.date} />
              ) : (
                <BookNowBtn classId={classItem.id} />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassTable;
