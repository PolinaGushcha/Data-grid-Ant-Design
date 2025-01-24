'use client'

import { PoweroffOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Divider, Flex, Input, Table, TableColumnsType, TableProps } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import React from 'react'
import { useState } from 'react'

interface DataType {
	key: React.Key
	name: string
	age1: string
	age2: string
	age3: string
	age4: string
	city: string
	status: string
	description: string
}
// interface TableParams {
// 	pagination?: TablePaginationConfig;
// 	sortField?: SorterResult<any>['field'];
// 	sortOrder?: SorterResult<any>['order'];
// 	filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
//   }
  
const columns: TableColumnsType<DataType> = [
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

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
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

export const PageTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys)
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection: TableRowSelection<DataType> = {
		selectedRowKeys,
		onChange: onSelectChange
	}

	const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	  };	  

	return (
		<Flex gap='middle' vertical>
			<Flex>
				<p>Filter A:
				<Input style={{ width: '20%' }} defaultValue="0571" placeholder='Input' />
				</p>
			</Flex>
			<Flex align='center' gap='middle'>
				<p>
					{selectedRowKeys.length} of {dataSource.length} Selected
				</p>
				<Flex>
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} />
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} />
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} />
				<Divider style={{ margin: 10 }} type="vertical" />
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} />
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} />
				<Button type='primary' iconPosition='start' icon={<PoweroffOutlined />} />
				</Flex>
			</Flex>
			<Table<DataType>
				rowKey={(record) => record.key}
				// pagination={tableParams.pagination}
				onChange={onChange}
				rowSelection={rowSelection}
				columns={columns}
				dataSource={dataSource}
				expandable={{
					expandedRowRender: record => <p>{record.description}</p>,
					rowExpandable: record => record.name !== 'Not Expandable',
					expandIcon: ({ expanded, onExpand, record }) =>
						expanded ? <RightOutlined onClick={e => onExpand(record, e)} /> : <RightOutlined onClick={e => onExpand(record, e)} />
				}}
			/>
		</Flex>
	)
}
