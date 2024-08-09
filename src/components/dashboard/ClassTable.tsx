import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "../../shadcncomponents/ui/table";
import ClassRow from "./ClassRow";

const ClassTable: React.FC = () => {
  const classes = useSelector((state: RootState) => state.classes.classes);

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
          <ClassRow key={classItem.id} classItem={classItem} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassTable;
