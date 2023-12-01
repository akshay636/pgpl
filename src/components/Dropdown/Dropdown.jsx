import { useState } from 'react';
const department = [
  'Automobile Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Pharmacy',
  'IT',
];
const Dropdown = ({ name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDoubleDropdownOpen(false);
  };

  const toggleDoubleDropdown = () => {
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        id="mega-menu-full-dropdown-button"
        data-collapse-toggle="mega-menu-full-dropdown"
        className="flex items-center text-xs justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      >
        {name}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="multi-dropdown"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="multiLevelDropdownButton"
          >
            {department.map((dep) =>
              dep === 'IT' ? (
                <li>
                  <button
                    id="doubleDropdownButton"
                    onClick={toggleDoubleDropdown}
                    className="flex text-xs items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    type="button"
                  >
                    {dep}
                    <svg
                      className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>

                  {/* Double Dropdown */}
                  {isDoubleDropdownOpen && (
                    <div
                      id="doubleDropdown"
                      className="absolute z-20 top-10 mt-0 ml-44 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-xs text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li>
                  <a
                    href="#"
                    className=" text-xs block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {dep}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
