import { MailOutlined } from '@ant-design/icons'
import { Flex, Menu } from 'antd'
import { items } from 'constants/pageSideMenu.constants'
import 'styles/components/pageSideMenu.styles.css'

import LogoIcon from 'ui/LogoIcon'

export const PageSideMenu = () => {
	return (
		<>
			<Flex className='pageSideMenu__logo'>
				<LogoIcon />
			</Flex>
			<Menu itemIcon={<MailOutlined />} className='pageSideMenu__menu' mode='inline' defaultSelectedKeys={['0']} items={items} />
		</>
	)
}
