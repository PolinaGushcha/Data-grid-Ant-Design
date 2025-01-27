import { MailOutlined } from '@ant-design/icons'
import { Flex, Menu } from 'antd'
import 'styles/components/pageSideMenu.styles.css'

import LogoIcon from 'ui/LogoIcon'

import { SIDEMENUITEMSCOUNT } from '@/constants/countsOfElements.constants'
import { createMenuList } from '@/services'

export const PageSideMenu = () => {
	return (
		<>
			<Flex className='pageSideMenu__logo'>
				<LogoIcon />
			</Flex>
			<Menu
				itemIcon={<MailOutlined />}
				className='pageSideMenu__menu'
				mode='inline'
				defaultSelectedKeys={['0']}
				items={createMenuList({ arrayLength: SIDEMENUITEMSCOUNT, label: '' })}
			/>
		</>
	)
}
