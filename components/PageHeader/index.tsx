'use client'

import { MailOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Button, Flex, Tabs, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'
import 'styles/pageHeader.css'

import { AvatarComponent } from '../UserInfo'

const PageTitle = () => {
	const { Title } = Typography
	const router = useRouter()

	const handleRouteLocation = () => {
		router.push('/createRecord')
	}

	return (
		<Flex className='pageTitle'>
			<Title level={2}>Page Title</Title>
			<Flex className='pageTitle__buttons'>
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} onClick={handleRouteLocation}>
					Create new
				</Button>
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />}>
					Create new
				</Button>
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />}>
					Create new
				</Button>
			</Flex>
		</Flex>
	)
}

const items = Array.from({ length: 4 }).map((_, index) => ({
	key: String(index),
	label: 'Navigation Item',
	children: <PageTitle />,
	icon: React.createElement(MailOutlined)
}))

const PageHeader: React.FC = () => {
	return (
		<Flex justify='space-between' className='pageHeader'>
			<Tabs
				tabBarExtraContent={AvatarComponent()}
				defaultActiveKey='1'
				items={items}
				className='tabs'
				indicator={{ size: origin => origin - 32, align: 'center' }}
			/>
		</Flex>
	)
}

export default PageHeader
