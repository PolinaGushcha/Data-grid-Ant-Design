'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { Layout, Tabs } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import { PageHeader, PageSideMenu, PageTable } from 'components'
import DataContextProvider from 'context/DataContextProvider'
import React from 'react'
import { createMenuList } from 'services'
import 'styles/pages/main.styles.css'

import { TABSCOUNT } from '@/constants/countsOfElements.constants'

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
							<DataContextProvider>
								<Tabs
									className='tableTabs'
									type='card'
									items={createMenuList({ arrayLength: TABSCOUNT, label: 'Tab title', children: <PageTable /> })}
								/>
							</DataContextProvider>
						</Content>
					</Layout>
				</Content>
			</Layout>
		</StyleProvider>
	)
}
