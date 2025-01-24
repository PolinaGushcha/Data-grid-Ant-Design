'use client'

import { RightOutlined } from '@ant-design/icons'
import { Flex, Table } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { columns, dataSource } from 'constants/pageTable.constants'
import React, { useState } from 'react'
import { DataType } from 'types/pageTable.types'

import { FilterForm } from 'ui/FilterForm'

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
	return (
		<Flex gap='middle' vertical>
			<FilterForm />
			{/* <Flex align='center' gap='middle'>
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
			</Flex> */}
			<Table<DataType>
				rowKey={record => record.key}
				rowSelection={rowSelection}
				columns={columns}
				dataSource={dataSource}
				expandable={{
					expandedRowRender: record => <p>{record.description}</p>,
					expandIcon: ({ expanded, onExpand, record }) =>
						expanded ? <RightOutlined onClick={e => onExpand(record, e)} /> : <RightOutlined onClick={e => onExpand(record, e)} />
				}}
			/>
		</Flex>
	)
}
