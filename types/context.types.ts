import { Dispatch, SetStateAction } from 'react'

import { DataType } from './pageTable.types'

export interface IDataContextProps {
	children: React.ReactNode
}
export interface IDataContext {
	tableData: DataType[]
	setTableData: Dispatch<SetStateAction<DataType[]>>
	addDataContext: (userTableData: DataType) => void
}
