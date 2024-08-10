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

import { ClassTableProps } from "../../types/ClassTable";

const ClassTable: React.FC<ClassTableProps> = ({
  showBookedOnly,
  currentPage,
  resultsPerPage,
}) => {
  const classes = useSelector((state: RootState) => state.classes.classes);

  const filteredClasses = showBookedOnly
    ? classes.filter((classItem) => classItem.Booked)
    : classes;

  const paginatedClasses = filteredClasses.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <Table>
      <TableHeader className="bg-gray-100 dark:bg-gray-700 md:table-header-group hidden">
        <TableRow className="bg-gray-100 dark:bg-gray-700">
          <TableHead>Class name</TableHead>
          <TableHead>Staff name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {paginatedClasses.map((classItem, index) => (
          <ClassRow key={classItem.id} classItem={classItem} index={index} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassTable;
