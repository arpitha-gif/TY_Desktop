import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/sidebar.scss";
import AddUser from "../../assets/add-user .png";

const SideMenuComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    console.log("first");
    const activeItem = sidebarMenuItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const sidebarMenuItems = [
    {
      display: "Batch",
      page: "Batch",
      inActiveIcon: "icon",
      activeIcon: <img src={AddUser} style={{ color: "#fff" }} alt="batch" />,
      to: "/batch",
      section: "batch",
      child: [],
    },
    {
      display: "Mentor",
      page: "Mentor",
      inActiveIcon: "icon",
      activeIcon: <img src={AddUser} style={{ color: "#fff" }} alt="mentor" />,
      to: "/mentor",
      section: "mentor",
      child: [],
    },
    {
      display: "Request",
      page: "Request",
      inActiveIcon: "icon",
      activeIcon: <img src={AddUser} style={{ color: "#fff" }} alt="request" />,
      to: "/request",
      section: "request",
      child: [],
    },
    {
      display: "Dashboard",
      page: "Dashboard",
      inActiveIcon: "icon",
      activeIcon: (
        <img src={AddUser} style={{ color: "#fff" }} alt="dashboard" />
      ),
      to: "/dashboard",
      section: "dashboard",
      child: [],
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        {sidebarMenuItems.map((item, index) => (
          <div
            className={`sidebar__menu__item ${
              activeIndex === index ? "activebg" : ""
            }`}
            key={index}
          >
            <Link className="text-decoration-none" to={item.to}>
              <div
                className={`sidebar__menu__item ${
                  activeIndex === index ? "activeborder" : ""
                }`}
              >
                <div>
                  {activeIndex === index ? item.activeIcon : item.inActiveIcon}
                </div>
                <div>{item.display}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenuComponent;
