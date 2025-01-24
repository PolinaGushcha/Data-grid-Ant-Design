'use client'

import { Button, Flex, Table, TableColumnsType } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
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
}

const columns: TableColumnsType<DataType> = [
	{ title: 'Name', dataIndex: 'name' },
	{ title: 'Age', dataIndex: 'age1' },
	{ title: 'Age', dataIndex: 'age2' },
	{ title: 'Age', dataIndex: 'age3' },
	{ title: 'Age', dataIndex: 'age4' },
	{ title: 'City', dataIndex: 'city' },
	{ title: 'Status', dataIndex: 'status' }
]

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
	key: i,
	name: 'Table cell text',
	age1: 'Table cell text',
	age2: 'Table cell text',
	age3: 'Table cell text',
	age4: 'Table cell text',
	city: 'Table cell text',
	status: 'Default'
}))

export const PageTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
	const [loading, setLoading] = useState(false)

	const start = () => {
		setLoading(true)
		// ajax request after empty completing
		setTimeout(() => {
			setSelectedRowKeys([])
			setLoading(false)
		}, 1000)
	}

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys)
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection: TableRowSelection<DataType> = {
		selectedRowKeys,
		onChange: onSelectChange
	}

	const hasSelected = selectedRowKeys.length > 0

	return (
		<Flex gap='middle' vertical>
			<Flex align='center' gap='middle'>
				<Button type='primary' onClick={start} disabled={!hasSelected} loading={loading}>
					Reload
				</Button>
				{hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
			</Flex>
			<Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
		</Flex>
	)
}
