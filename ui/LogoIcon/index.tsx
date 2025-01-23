"use client";

import React from "react";
import Icon from "@ant-design/icons";
import { Space } from "antd";

const LogoSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#4285F4" />
    <circle cx="12" cy="12" r="5" fill="white" />
  </svg>
);

const LogoComponent = () => <Icon component={LogoSvg} />;

const LogoIcon: React.FC = () => (
  <Space>
    <LogoComponent />
  </Space>
);

export default LogoIcon;
