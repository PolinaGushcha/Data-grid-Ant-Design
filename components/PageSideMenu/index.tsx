import { MailOutlined } from '@ant-design/icons'
import { Flex, Menu } from 'antd'
import React from 'react'
import 'styles/pageSider.css'

import LogoIcon from '@/ui/LogoIcon'

export default function PageSideMenu() {
	const items = Array.from({ length: 5 }).map((_, index) => ({
		key: String(index),
		icon: React.createElement(MailOutlined),
		label: ''
	}))

	return (
		<>
			<Flex className='sideMenu'>
				<LogoIcon />
			</Flex>
			<Menu className='menu' mode='inline' defaultSelectedKeys={['0']} items={items} />
		</>
	)
}
