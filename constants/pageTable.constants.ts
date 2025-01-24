import { TableColumnsType } from 'antd'
import { DataType } from 'types/pageTable.types'

export const columns: TableColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.name.startsWith(value as string),
		width: '40%',
		filters: [
			{
				text: 'London',
				value: 'London'
			},
			{
				text: 'New York',
				value: 'New York'
			}
		]
	},
	{ title: 'Age', dataIndex: 'age1' },
	{ title: 'Age', dataIndex: 'age2' },
	{ title: 'Age', dataIndex: 'age3' },
	{ title: 'Age', dataIndex: 'age4' },
	{ title: 'City', dataIndex: 'city' },
	{ title: 'Status', dataIndex: 'status' },
	{ title: 'Description', dataIndex: 'description' }
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
	description: 'Description'
}))
