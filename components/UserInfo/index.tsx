"use client"

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Flex, MenuProps, Space } from "antd";

const items: MenuProps['items'] = [
    {
      key: '1',
      label: '1st menu item'
    },
  ];

export const AvatarComponent = (): React.ReactNode => (
  <Flex className="userInfo">
    <Avatar size={32} icon={<UserOutlined />} />
    <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Dropdown
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </Flex>
)