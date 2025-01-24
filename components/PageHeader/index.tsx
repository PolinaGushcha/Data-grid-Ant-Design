'use client'

import { Flex, Tabs } from 'antd'
import { handleItems } from 'constants/pageHeader.constants'
import React from 'react'
import 'styles/pageHeader.styles.css'

import { HeaderTitle } from 'ui/HeaderTitle'
import { UserInfo } from 'ui/UserInfo'

const PageHeader: React.FC = () => {
	return (
		<Flex justify='space-between' className='pageHeader'>
			<Tabs
				tabBarExtraContent={<UserInfo />}
				defaultActiveKey='0'
				items={handleItems(<HeaderTitle />)}
				className='pageHeader__tabs'
				indicator={{ size: origin => origin - 32, align: 'center' }}
			/>
		</Flex>
	)
}

export default PageHeader
