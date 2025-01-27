'use client'

import { MailOutlined } from '@ant-design/icons'
import { Flex, Tabs } from 'antd'
import React from 'react'
import 'styles/components/pageHeader.styles.css'
import { HeaderTitleBlock, UserInfoDropdown } from 'ui'

import { NAVIGATIONITEMSCOUNT } from '@/constants/countsOfElements.constants'
import { createMenuList } from '@/services'

export const PageHeader: React.FC = () => {
	return (
		<Flex justify='space-between' className='pageHeader'>
			<Tabs
				tabBarExtraContent={<UserInfoDropdown />}
				defaultActiveKey='0'
				className='pageHeader__tabs'
				indicator={{ size: origin => origin - 32, align: 'center' }}
				items={createMenuList({
					arrayLength: NAVIGATIONITEMSCOUNT,
					label: 'Navigation Item',
					children: <HeaderTitleBlock />,
					icon: <MailOutlined />
				})}
			/>
		</Flex>
	)
}
