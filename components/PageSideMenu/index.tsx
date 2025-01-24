import { Flex, Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";
import LogoIcon from "@/ui/LogoIcon";
import 'styles/pageSider.css'

export default function PageSideMenu() {
  const items = Array.from({ length: 5 }).map((_, index) => ({
    key: String(index),
    icon: React.createElement(MailOutlined),
    label: "",
  }));

  return (
    <>
      <Flex className="sideMenu">
        <LogoIcon />
      </Flex>
      <Menu className="menu" mode="inline" defaultSelectedKeys={["0"]} items={items} />
    </>
  );
}
