import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// Importing UI components for table layout
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "../../shadcncomponents/ui/table";
// Importing the ClassRow component to render individual rows
import ClassRow from "./ClassRow";
// Importing TypeScript types for props validation
import { ClassTableProps } from "../../types/ClassTable";
//  This component renders a table
const ClassTable: React.FC<ClassTableProps> = ({
  showBookedOnly,
  currentPage,
  resultsPerPage,
}) => {
  // retreving the classes data from redux store
  const classes = useSelector((state: RootState) => state.classes.classes);

  // filtering the data based on the booked true or false
  const filteredClasses = showBookedOnly
    ? classes.filter((classItem) => classItem.Booked)
    : classes;

  // for pagination
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
      {/* Table body with rows for each class */}
      <TableBody>
        {paginatedClasses.map((classItem, index) => (
          <ClassRow key={classItem.id} classItem={classItem} index={index} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassTable;
