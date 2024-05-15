import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/const/DataEntryNavigation';
import { LiaAngleRightSolid } from 'react-icons/lia';

const linkClasses = 'flex items-center gap-2 px-3 hover:bg-c-teal hover:no-underline hover:text-white active:bg-c-teal rounded-sm text-sm';

export default function DataEntrySidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [submenuStates, setSubmenuStates] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 640); // Collapse sidebar automatically on small screens
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  const toggleSubmenu = (key) => {
    setSubmenuStates({
      ...submenuStates,
      [key]: !submenuStates[key]
    });
  };

  return (
<div className={`bg-white p-3 flex flex-col text-neutral-700 shadow-xl z-10 ${isOpen ? 'min-w-64 ' : 'w-20 '}`}>
      <div className="flex flex-col items-center px-1 py-3">
        <a href="/" className="flex flex-col cursor-pointer focus:outline-none hover:no-underline">
          <div className="flex items-center gap-2">
            <span className={`text-c-dark-grayish  ${isOpen ? 'text-2xl' : 'text-md' } font-bold`}>DATA ENTRY</span>
          </div>
          <span className="text-xs text-c-dark-grayish ml-auto">by CBRE</span>
        </a>
      </div>
      <div className={`flex-1 py-8 flex flex-col gap-0.5`}>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink
            key={item.key}
            item={item}
            isOpen={isOpen}
            onClick={() => toggleSubmenu(item.key)}
            submenuOpen={submenuStates[item.key]}
          />
        ))}
      </div>
      {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
        <SidebarLink key={item.key} item={item} isOpen={isOpen}
        />
      ))}
      {/* <button
        className="bg-c-teal focus:outline-none md:hidden"
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
      </button> */}
    </div>
  );
}

function SidebarLink({ item, isOpen }) {
  const { pathname } = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track the currently active submenu
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setActiveSubmenu(null); // Close the active submenu when clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setActiveSubmenu(item.path); // Set the active submenu when mouse enters
  };

  const handleMouseLeave = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.closest || !event.relatedTarget.closest('.submenu-container')) {
      setActiveSubmenu(null); // Close active submenu only if cursor leaves all menu items
    }
  };

  const handleSubmenuClick = () => {
    setActiveSubmenu(activeSubmenu === item.path ? null : item.path); // Toggle submenu on main menu item click
  };

  const handleSubmenuItemClicked = () => {
    setActiveSubmenu(null); // Close submenu on submenu item click
  };

  const handleMouseEnterSubmenu = () => {
    setActiveSubmenu(item.path); // Set the active submenu when mouse enters submenu
  };

  const handleMouseLeaveSubmenu = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.closest || !event.relatedTarget.closest('.submenu-container')) {
      setActiveSubmenu(null); // Close submenu only if cursor leaves all menu items
    }
  };

  // console.log(isOpen)
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div style={{ position: 'relative' }}>
      <Link
        to={item.path}
        className={classnames(
          'py-3',
          pathname === item.path ? 'bg-c-teal text-white' : 'text-c-dark-grayish',
          linkClasses
        )}
        onMouseEnter={handleMouseEnter} // Set active submenu on mouse enter
        onMouseLeave={handleMouseLeave} // Close active submenu on mouse leave
        onClick={handleSubmenuClick} // Toggle submenu on main menu item click
      >
        <span className='text-xl'>{item.icon}</span> {/* Render icon only when sidebar is collapsed */}
        {isOpen ? <span>{item.label}</span> : null}
        {/* {console.log(isOpen)} */}
        {hasSubmenu && <LiaAngleRightSolid className="ml-auto " fontSize={13} />} {/* Display arrow icon if submenu exists */}
      </Link>
      {item.submenu && activeSubmenu === item.path && ( // Only show submenu if active submenu matches current menu item
        <div
          ref={submenuRef}
          className={classnames('submenu-container bg-white flex flex-col text-neutral-700 shadow-xl z-11 gap-0.5 ')}
          style={{
            position: 'absolute',
            top: 0,
            left: '100%',
            padding: '8px 0',
            width: '200px', // Adjust the width as per your requirement
            flexDirection: 'column',
          }}
          onMouseEnter={handleMouseEnterSubmenu} // Keep submenu displayed on submenu mouse enter
          onMouseLeave={handleMouseLeaveSubmenu} // Close submenu on submenu mouse leave
        >
          {item.submenu.map(submenuItem => (
            <Link
              key={submenuItem.key}
              to={submenuItem.path}
              className={classnames(
                'py-2',
                pathname === submenuItem.path ? 'bg-c-teal text-white' : 'text-neutral-700',
                linkClasses
              )}
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={handleSubmenuItemClicked} // Close submenu on submenu item click
            >
              {!isOpen && <span className='text-sm'>{submenuItem.icon}</span>} {/* Render submenu icon only when sidebar is collapsed */}
              <span>{submenuItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


