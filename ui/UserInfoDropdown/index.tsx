'use client'

import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Flex, Space } from 'antd'
import { DROPDOWNACCOUNTITEMS } from 'constants/userInfoDropdown.constants'
import 'styles/ui/userInfo.styles.css'

export const UserInfoDropdown = (): React.ReactNode => (
	<Flex className='userInfo'>
		<Avatar size={32} icon={<UserOutlined />} />
		<Dropdown menu={{ items: DROPDOWNACCOUNTITEMS }} className='userInfo__dropdown' rootClassName='userInfo__dropdowContainer'>
			<a onClick={e => e.preventDefault()}>
				<Space>
					Dropdown
					<DownOutlined />
				</Space>
			</a>
		</Dropdown>
	</Flex>
)
