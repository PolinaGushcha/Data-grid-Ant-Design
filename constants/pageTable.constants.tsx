import { MoreOutlined } from '@ant-design/icons'
import { Avatar, Flex, TableColumnsType, Tag } from 'antd'
import { DataType } from 'types/pageTable.types'

import srcAvatar from '../app/avatar.png'

export const columns: TableColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		render: text => (
			<div className='pageTable__table__name'>
				<Avatar src={srcAvatar.src} />
				<p>{text}</p>
			</div>
		),
		width: '10.8%'
	},
	{ title: 'Age', dataIndex: 'age1', width: '10.8%' },
	{ title: 'Age', dataIndex: 'age2', width: '10.8%' },
	{ title: 'Age', dataIndex: 'age3', width: '10.8%' },
	{ title: 'Age', dataIndex: 'age4', width: '10.7%' },
	{ title: 'City', dataIndex: 'city', width: '10.8%' },
	{ title: 'Status', dataIndex: 'status', width: '10.8%', render: text => <Tag className='pageTable__table__status'>{text}</Tag> },
	{
		title: '',
		dataIndex: 'action',
		width: '15.6%',
		render: text => (
			<Flex className='pageTable__table__action'>
				<a>{text} 1</a>
				<a>{text} 2</a>
				<a>{text} 3</a>
			</Flex>
		)
	},
	{ title: '', dataIndex: 'more', render: () => <MoreOutlined className='pageTable__table__more' /> }
]

export const dataSource = Array.from<DataType>({ length: 1000 }).map<DataType>((_, i) => ({
	key: i,
	name: 'Table cell text',
	age1: 'Table cell text',
	age2: 'Table cell text',
	age3: 'Table cell text',
	age4: 'Table cell text',
	city: 'Table cell text',
	status: 'Default',
	description: 'Description',
	action: 'Action'
}))
