'use client'

import { BugFilled, InsertRowRightOutlined, MoreOutlined, RightOutlined, SaveFilled } from '@ant-design/icons'
import { Button, Divider, Flex, Table, TableProps } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { columns } from 'constants/pageTable.constants'
import React, { useEffect, useState } from 'react'
import 'styles/pageTable.styles.css'
import { DataType, TableParams } from 'types/pageTable.types'

import { FilterForm } from 'ui/FilterForm'

import { useDataContext } from '@/store/DataContextProvider'

export const PageTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
	const { tableData } = useDataContext()
	const [tableParams, setTableParams] = useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 14,
			showSizeChanger: true,
			showQuickJumper: true,
			pageSizeOptions: [0, 10, 14, 20, 50, 100],
			total: tableData.length,
			className: 'pageTable__pagination'
		}
	})

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection: TableRowSelection<DataType> = {
		selectedRowKeys,
		onChange: onSelectChange
	}

	useEffect(() => {
		const paginationInput = document.querySelector('[aria-label="Page"]') as HTMLInputElement
		if (paginationInput) {
			paginationInput.placeholder = 'Input'
		}
	}, [])

	const handleTableChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters
		})
	}

	return (
		<Flex gap='middle' vertical className='pageTable'>
			<FilterForm />
			<Flex align='flex-start' gap='middle' justify='space-between'>
				<p className='pageTable__selectedCount'>
					{selectedRowKeys.length} of {tableData.length} Selected
				</p>
				<Flex className='pageTable__btnContainer' gap={25}>
					<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<BugFilled />} />
					<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<BugFilled />} />
					<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<MoreOutlined />} />
					<Divider className='pageTable__btnContainer__divider' type='vertical' />
					<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<SaveFilled />} />
					<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<InsertRowRightOutlined />} />
					<Button className='pageTable__btnContainer__btn' type='default' iconPosition='start' icon={<MoreOutlined />} />
				</Flex>
			</Flex>
			<Table<DataType>
				pagination={tableParams.pagination}
				className='pageTable__table'
				rowKey={record => record.key}
				rowSelection={rowSelection}
				columns={columns}
				dataSource={tableData}
				onChange={handleTableChange}
				expandable={{
					expandedRowRender: record => <p>{record.description}</p>,
					expandIcon: ({ expanded, onExpand, record }) =>
						expanded ? <RightOutlined onClick={e => onExpand(record, e)} /> : <RightOutlined onClick={e => onExpand(record, e)} />
				}}
			/>
		</Flex>
	)
}
