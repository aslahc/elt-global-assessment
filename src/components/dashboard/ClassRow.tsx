import React from "react";
import { TableRow, TableCell } from "../../shadcncomponents/ui/table";
import { formatDateTime } from "../../utils/dateutils";
import BookNowBtn from "../Buttons/BookNowBtn";
import CountdownTime from "../Buttons/CountdownTIme";
import LiveJoinBtn from "../Buttons/LiveJoinBtn";
import LiveTimer from "../Buttons/LiveTimer";
import { ClassData } from "../../types/classDataTypes";

interface ClassRowProps {
  classItem: ClassData;
  index: number; // Add this line
}

const ClassRow: React.FC<ClassRowProps> = ({ classItem, index }) => (
  <TableRow className="bg-gray-100 dark:bg-gray-700">
    <TableCell>
      <div className="grid grid-cols-[auto_1fr] gap-3">
        <span
          className="self-center  text--100 dark:text-gray-500 font-medium pr-2"
          style={{ color: "#A1A0A3" }}
        >
          {index + 1}
        </span>
        <div className="flex flex-col justify-between">
          <span
            className=" text-[14px] leading-[18px] tracking-[-0.05px] font-inter whitespace-nowrap dark:text-white"
            style={{ fontWeight: 645 }}
          >
            {classItem.name}
          </span>
          <div className="flex items-center space-x-1 text-sm">
            {classItem.Live ? (
              <LiveTimer />
            ) : (
              <div className="text-[13px] text-gray-500 dark:text-gray-400 font-normal">
                {formatDateTime(classItem.date)}
              </div>
            )}
          </div>
        </div>
      </div>
    </TableCell>
    <TableCell>
      <div className="flex items-center space-x-2 pr-14">
        <img
          src={classItem.imgSrc}
          alt={classItem.staff}
          className="h-9 w-9 rounded-full"
        />
        <div className="grid">
          <div className="font-semibold dark:text-white">{classItem.staff}</div>
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
        <CountdownTime targetDate={classItem.date} classId={classItem.id} />
      ) : (
        <BookNowBtn classId={classItem.id} />
      )}
    </TableCell>
  </TableRow>
);

export default ClassRow;
