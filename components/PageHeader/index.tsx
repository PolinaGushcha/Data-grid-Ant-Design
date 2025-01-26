'use client'

import { Flex, Tabs } from 'antd'
import { handleItems } from 'constants/pageHeader.constants'
import React from 'react'
import 'styles/components/pageHeader.styles.css'
import { HeaderTitleBlock, UserInfoDropdown } from 'ui'

export const PageHeader: React.FC = () => {
	return (
		<Flex justify='space-between' className='pageHeader'>
			<Tabs
				tabBarExtraContent={<UserInfoDropdown />}
				defaultActiveKey='0'
				items={handleItems(<HeaderTitleBlock />)}
				className='pageHeader__tabs'
				indicator={{ size: origin => origin - 32, align: 'center' }}
			/>
		</Flex>
	)
}
