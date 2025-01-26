'use client'

import { RightOutlined } from '@ant-design/icons'
import { Flex, Table } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { columns } from 'constants/pageTable.constants'
import { useDataContext } from 'context/DataContextProvider'
import React, { useEffect, useState } from 'react'
import 'styles/components/pageTable.styles.css'
import { DataType, TableParams } from 'types/pageTable.types'
import { FilterFormBlock, SelectedCountBlock } from 'ui'

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
	const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection: TableRowSelection<DataType> = {
		selectedRowKeys,
		onChange: onSelectChange
	}

	const toggleExpand = (key: React.Key) => {
		setExpandedKeys(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]))
	}

	useEffect(() => {
		const paginationInput = document.querySelector('[aria-label="Page"]') as HTMLInputElement
		if (paginationInput) {
			paginationInput.placeholder = 'Input'
		}
	}, [])

	return (
		<Flex gap='middle' vertical className='pageTable'>
			<FilterFormBlock />
			<Flex align='flex-start' gap='middle' justify='space-between'>
				<SelectedCountBlock selectedRowKeysLength={selectedRowKeys.length} tableDataLength={tableData.length} />
			</Flex>
			<Table<DataType>
				pagination={tableParams.pagination}
				className='pageTable__table'
				rowKey={record => record.key}
				rowSelection={rowSelection}
				columns={columns}
				dataSource={tableData}
				onChange={(pagination, filters) => setTableParams({ pagination, filters })}
				expandable={{
					expandedRowRender: record => <p>{record.description}</p>,
					expandIcon: ({ expanded, onExpand, record }) => (
						<RightOutlined
							onClick={e => {
								onExpand(record, e)
								toggleExpand(record.key)
							}}
							style={{
								transition: 'transform 0.2s',
								transform: expanded || expandedKeys.includes(record.key) ? 'rotate(90deg)' : 'rotate(0deg)'
							}}
						/>
					)
				}}
			/>
		</Flex>
	)
}
