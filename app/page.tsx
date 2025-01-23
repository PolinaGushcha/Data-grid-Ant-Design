'use client'

import { StyleProvider } from "@ant-design/cssinjs";
import { Layout } from "antd";
import "@styles/main.css"

export default function Main() {
  return (
    <StyleProvider layer>
      <Layout className="main" hasSider={true}>
      </Layout>
    </StyleProvider>
  )
}
