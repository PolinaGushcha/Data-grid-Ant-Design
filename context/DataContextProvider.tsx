import { createContext, useContext, useState } from 'react'
import { IDataContext, IDataContextProps } from 'types/context.types'
import { DataType } from 'types/pageTable.types'

import { TABLEDATACOUNT } from '@/constants/countsOfElements.constants'
import { ArrayMockTableData } from '@/services'

const DataContext = createContext<IDataContext>({} as IDataContext)

const DataContextProvider = ({ children }: IDataContextProps) => {
	const [tableData, setTableData] = useState<DataType[]>(ArrayMockTableData)

	const addDataContext = () => {
		setTableData(prev => {
			prev.unshift({
				key: TABLEDATACOUNT + 1,
				name: 'Text from Form',
				age1: 'Text from Form',
				age2: 'Text from Form',
				age3: 'Text from Form',
				age4: 'Text from Form',
				city: 'Text from Form',
				status: 'Default',
				description: 'Description',
				action: 'Action'
			})
			return prev
		})
	}

	const filterDatatContext = (value: string) => {
		const filtered = ArrayMockTableData.filter(item => {
			return item.name.toLowerCase().includes(value.toLowerCase())
		})
		setTableData(filtered)
	}

	const contextValue: IDataContext = { tableData, setTableData, addDataContext, filterDatatContext }

	return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}
export const useDataContext = () => useContext(DataContext)

export default DataContextProvider
