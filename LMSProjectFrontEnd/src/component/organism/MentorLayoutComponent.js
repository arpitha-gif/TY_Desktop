import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import { SearchOutlined } from "@mui/icons-material";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import AddUser from "../../assets/add-user .png";
import SidebarComponent from "../organism/SideBar";
import RouterComponent from "../routes/RouterComponent";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonComponent from "../atom/ButtonComponent";
import { Box } from "@mui/material";
import MentorRoute from "../routes/MentorRoute";
import MentorSidebar from "./MentorSideBar";
import LogiTechno from "../../assets/login/technologo.svg";

const { Header, Content, Sider } = Layout;

function MentorLayoutComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const curPath = window.location.pathname;
    setActiveIndex(curPath);
  }, [location]);

  const handleLogout = () => {
    localStorage.clear("token");
    history("/");
  };

  return (
    <Layout className="p-0">
      <Header color="#FFFFFF" className="header d-flex ">
        <div className="logo mt-0 " style={{ backgroundColor: "#0000" }}>
          <img src={LogiTechno} style={{ width: "188px", height: "54px" }} />
        </div>

        <Box
          style={{ float: "right", width: "500px", marginLeft: "350px" }}
          className="me-5"
        >
          <Input
            size="default"
            placeholder="Search Mentor / Employee"
            prefix={<SearchOutlined />}
          />
        </Box>

        <Box style={{ float: "right", marginLeft: "250px" }}>
          <ButtonComponent
            label="Logout"
            onClick={() => {
              handleLogout();
            }}
          />
        </Box>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]} />
      </Header>
      <Layout className="p-0">
        <Sider width={70} className="site-layout-background">
          <MentorSidebar />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {activeIndex === "/mentorDashboard" ? (
              <Breadcrumb.Item></Breadcrumb.Item>
            ) : activeIndex === "/mentorBatch" ? (
              <Breadcrumb.Item>Request list</Breadcrumb.Item>
            ) : (
              activeIndex === "/request"
            )}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: 450,
            }}
          >
            <MentorRoute />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MentorLayoutComponent;
