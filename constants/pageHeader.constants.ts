import { MailOutlined } from '@ant-design/icons'
import React from 'react'

export const handleItems = (PageTitle: React.JSX.Element) => {
	return Array.from({ length: 4 }).map((_, index) => ({
		key: String(index),
		label: 'Navigation Item',
		children: PageTitle,
		icon: React.createElement(MailOutlined)
	}))
}
