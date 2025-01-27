import { MenuProps } from 'antd'

const ACCOUNTNAME = {
	key: '1',
	label: 'My Account',
	disabled: true
}
const DROPDOWNMENUITEMS = [
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

export const DROPDOWNACCOUNTITEMS: MenuProps['items'] = [ACCOUNTNAME, { type: 'divider' }, ...DROPDOWNMENUITEMS]
