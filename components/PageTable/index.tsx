'use client'

import { BugFilled, InsertRowRightOutlined, MoreOutlined, RightOutlined, SaveFilled } from '@ant-design/icons'
import { Button, Divider, Flex, Table } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { columns, dataSource } from 'constants/pageTable.constants'
import React, { useState } from 'react'
import { DataType } from 'types/pageTable.types'
import "styles/pageTable.styles.css"
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
		<Flex gap='middle' vertical className='pageTable'>
			<FilterForm />
			<Flex align="flex-start" gap='middle' justify="space-between">
				<p className='pageTable__selectedCount'>{selectedRowKeys.length} of {dataSource.length} Selected</p>
				<Flex className='pageTable__btnContainer' gap={25}>
				<Button className='pageTable__btnContainer__btn' type="default" iconPosition='start' icon={<BugFilled />} />
				<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<BugFilled />} />
				<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<MoreOutlined />} />
				<Divider className='pageTable__btnContainer__divider' type="vertical" />
				<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<SaveFilled />} />
				<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<InsertRowRightOutlined />} />
				<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<MoreOutlined />} />
				</Flex>
			</Flex>
			<Table<DataType>
				showSorterTooltip={{ target: 'sorter-icon' }}
				className='pageTable__table'
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
