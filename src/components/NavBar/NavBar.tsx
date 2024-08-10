import useTheme from "../../hooks/useTheme";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
// Importing navigation items from a utility file
import { navItems } from "../../utils/navItems";

//  This component renders the navigation bar for the application.
function NavBar() {
  // hook used to switch theme
  const { isDarkTheme, toggleTheme } = useTheme();
  //

  return (
    // The  div changes its class based on the current theme
    <div className={isDarkTheme ? "dark" : ""}>
      <nav
        className={`bg-white hidden lg:block border-gray-200 top-0 ${
          isDarkTheme ? "dark:bg-gray-900 dark:border-gray-700" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-16">
            <div className="flex space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-gray-700 hover:text-gray-900 px-2 py-2 text-sm font-normal ${
                    isDarkTheme
                      ? "dark:text-gray-300 dark:hover:text-gray-200"
                      : ""
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          {/* ThemeSwitcher component to toggle between dark and light themes */}
          <ThemeSwitcher isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>
      </nav>
      <nav
        className={`bg-white border-b border-gray-200 top-0 ${
          isDarkTheme ? "dark:bg-gray-900 dark:border-gray-700" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-12">
            <div className="flex space-x-6 text-2xl font-bold">Dashboard</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
