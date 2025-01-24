import { MenuProps } from 'antd'

export const items: MenuProps['items'] = [
	{
		key: '1',
		label: 'My Account',
		disabled: true
	},
	{
		type: 'divider'
	},
	{
		key: '2',
		label: '1st menu item'
	},
	{
		key: '3',
		label: '2st menu item'
	},
	{
		key: '4',
		label: '3st menu item'
	}
]
