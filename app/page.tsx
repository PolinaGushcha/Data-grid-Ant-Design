'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { Layout, Tabs } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import PageSideMenu from 'components/PageSideMenu'
import React from 'react'
import 'styles/main.css'

import PageHeader from '@/components/PageHeader'
import { PageTable } from '@/components/PageTable'

export default function Main() {
	return (
		<StyleProvider layer>
			<Layout className='main' hasSider={true}>
				<Sider width={80} className='sider' theme='light'>
					<PageSideMenu />
				</Sider>
				<Content>
					<Layout>
						<Header className='header'>
							<PageHeader />
						</Header>
						<Content>
							<Tabs
								className='tableTabs'
								type='card'
								items={new Array(3).fill(null).map((_, i) => {
									const id = String(i + 1)
									return {
										label: `Tab title`,
										key: id,
										children: React.createElement(PageTable)
									}
								})}
							/>
						</Content>
					</Layout>
				</Content>
			</Layout>
		</StyleProvider>
	)
}
