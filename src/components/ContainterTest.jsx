import React, { useState, useEffect } from 'react';

const ContainerTest = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth <= 768); // Collapse sidebar automatically on small screens
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (

    <div className={`h-full ${isOpen ? "w-20" : "w-64"}`}>
      <div className="bg-gray-800 text-white h-full">
        <div className="flex justify-between items-center px-4 py-3">
          <div>Logo</div>
          <button
            className="focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <nav className="mt-5">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Link 1</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Link 2</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Link 3</a>
        </nav>
      </div>
    </div>
  );
};

export default ContainerTest;
