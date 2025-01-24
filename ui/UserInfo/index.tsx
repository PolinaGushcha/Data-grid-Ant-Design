'use client'

import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Flex, Space } from 'antd'
import { items } from 'constants/userInfo.constants'
import 'styles/userInfo.styles.css'

export const UserInfo = (): React.ReactNode => (
	<Flex className='userInfo'>
		<Avatar size={32} icon={<UserOutlined />} />
		<Dropdown menu={{ items }} className='userInfo__dropdown' rootClassName='userInfo__dropdowContainer'>
			<a onClick={e => e.preventDefault()}>
				<Space>
					Dropdown
					<DownOutlined />
				</Space>
			</a>
		</Dropdown>
	</Flex>
)
