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
    <div className="w-64 h-auto bg-white dark:bg-gray-900 flex flex-col hidden lg:block">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 mb-3 ml-3">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Logo
        </h2>
      </div>

      <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-4 pl-7 pt-3">
        <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROo02yiD2PshvSHLxTb4B-OFNg4FkIwsvtQw&usqp=CAU"
            alt="Profile"
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Intermediate
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div
                className={`flex items-center justify-center w-8 h-8 ml-2 rounded-full ${
                  item.active
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-600"
                }`}
              >
                <item.icon size={18} />
              </div>
              <span
                className={`ml-3 ${item.active ? "font-bold" : ""} ${
                  item.active
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-shrink-0 mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600">
            <LogOut size={20} />
          </div>
          <span className="ml-3">Log out</span>
        </div>
      </div>

      <div className="p-4 text-xs text-gray-500 dark:text-gray-400">v1.2</div>
    </div>
  );
}

export default Sidebar;
