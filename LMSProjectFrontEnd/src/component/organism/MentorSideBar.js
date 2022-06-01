import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/sidebar.scss";
import AddUser from "../../assets/add-user .png";
import AddBatch from "../../assets/icons/batch.svg";
import AddDashboard from "../../assets/icons/dashboard.svg";

const MentorSidebar = () => {
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
      display: "Dashboard",
      page: "dashboard",
      inActiveIcon: (
        <img
          src={AddDashboard}
          style={{ color: "#fff", width: "23px" }}
          alt="mentor"
        />
      ),
      activeIcon: <img src={AddUser} style={{ color: "#fff" }} alt="mentor" />,
      to: "/mentorDashboard",
      section: "mentorDashboard",
      child: [],
    },
    {
      display: "Batch",
      page: "Batch",
      inActiveIcon: (
        <img
          src={AddBatch}
          style={{ color: "#fff", width: "23px" }}
          alt="mentor"
        />
      ),
      activeIcon: <img src={AddUser} style={{ color: "#fff" }} alt="batch" />,
      to: "/mentorBatch",
      section: "mentorBatch",
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

export default MentorSidebar;
