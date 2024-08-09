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
}

const ClassRow: React.FC<ClassRowProps> = ({ classItem }) => (
  <TableRow className="bg-gray-100 dark:bg-gray-700">
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
      <div className="flex items-center space-x-2">
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
