import { dataSource } from 'constants/pageTable.constants'
import { createContext, useContext, useState } from 'react'
import { IDataContext, IDataContextProps } from 'types/context.types'
import { DataType } from 'types/pageTable.types'

const DataContext = createContext<IDataContext>({} as IDataContext)
const DataContextProvider = ({ children }: IDataContextProps) => {
	const [tableData, setTableData] = useState<DataType[]>(dataSource)

	const addDataContext = (userTableData: DataType) => {
		tableData.push(userTableData)
		setTableData(tableData)
	}

	const contextValue: IDataContext = { tableData, setTableData, addDataContext }

	return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}
export const useDataContext = () => useContext(DataContext)

export default DataContextProvider
