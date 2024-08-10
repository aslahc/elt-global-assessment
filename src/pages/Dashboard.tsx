import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClasses } from "../redux/classSlice";
import { classData } from "../utils/classData";
import Sidebar from "../components/SideBar/Sidebar";
import UpcomingClasses from "../components/dashboard/UpcomingClasses";
import PaginationUi from "../components/pagination/PaginationUi";
import NavBar from "../components/NavBar/NavBar";
import AssignmentCard from "../components/Assig/AssignmentCard";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("before dispatch", classData);
    dispatch(setClasses(classData));
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50  dark:bg-gray-800">
        <NavBar />
        <div className="flex flex-col lg:flex-row ">
          <UpcomingClasses />
          <AssignmentCard />
        </div>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
