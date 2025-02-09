import { MoreOutlined } from '@ant-design/icons'
import { Avatar, Flex, TableColumnsType, Tag } from 'antd'
import { DataType } from 'types/pageTable.types'
import { v4 as uuidv4 } from 'uuid'

import srcAvatar from '../app/avatar.png'

export const TABLECOLUMNS: TableColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		render: text => (
			<div className='pageTable__table__name'>
				<Avatar src={srcAvatar.src} />
				<p>{text}</p>
			</div>
		),
		width: '10.8%',
		filters: [
			{
				text: 'Table cell text',
				value: 'Table cell text'
			}
		]
	},
	{ title: 'Age', dataIndex: 'age1', width: '10.8%', filters: [{ text: 'Table cell text', value: 'Table cell text' }] },
	{ title: 'Age', dataIndex: 'age2', width: '10.8%', filters: [{ text: 'Table cell text', value: 'Table cell text' }] },
	{ title: 'Age', dataIndex: 'age3', width: '10.8%', filters: [{ text: 'Table cell text', value: 'Table cell text' }] },
	{ title: 'Age', dataIndex: 'age4', width: '10.7%', filters: [{ text: 'Table cell text', value: 'Table cell text' }] },
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

export const MOCKTABLEDATA: DataType = {
	key: uuidv4(),
	name: 'Table cell text',
	age1: 'Table cell text',
	age2: 'Table cell text',
	age3: 'Table cell text',
	age4: 'Table cell text',
	city: 'Table cell text',
	status: 'Default',
	description: 'Description',
	action: 'Action'
}
