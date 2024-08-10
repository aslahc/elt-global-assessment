import React from "react";
import {
  Grid,
  BookOpen,
  FileText,
  BarChart2,
  CreditCard,
  Settings,
  LogOut,
} from "react-feather";

function Sidebar() {
  const menuItems = [
    { icon: Grid, text: "Dashboard", active: true },
    { icon: BookOpen, text: "All classes" },
    { icon: FileText, text: "Assignments" },
    { icon: BarChart2, text: "Performance" },
    { icon: CreditCard, text: "Fee details" },
    { icon: Settings, text: "Settings" },
  ];

  return (
    <div className="w-64 h-auto bg-white dark:bg-gray-900 dark:border-gray-700 flex flex-col">
      <div className="p-4 border-gray-200 mb-3   ml-3">
        <h2 className="text-xl font-bold">Logo</h2>
      </div>

      <div className="flex flex-col border-b pb-4 pl-7 pt-3">
        <div className="w-14 h-14 rounded-full bg-gray-300  flex items-center justify-center">
          <img
            src="https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
            alt=""
            className="h-14 w-14 rounded-full   leading-tight"
          />
        </div>
        <div className="">
          <p className="font-medium leading-tight">John Doe</p>
          <p className="text-sm text-gray-500">Intermediate</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-2  rounded-lg  hover:bg-gray-700"
            >
              <div
                className={`flex items-center justify-center  w-8 h-8 ml-2 rounded-full ${
                  item.active ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <item.icon size={18} />
              </div>
              <span className={`ml-3 ${item.active ? "font-bold" : ""}`}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-shrink-0 p-4 border-t border-gray-200 mt-auto">
        <div className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <LogOut size={20} />
          </div>
          <span className="ml-3">Log out</span>
        </div>
      </div>
      <div className="p-4 text-xs text-gray-500">v1.2</div>
    </div>
  );
}

export default Sidebar;
