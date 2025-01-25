import { GetProp, TablePaginationConfig, TableProps } from 'antd'

export interface DataType {
	key: React.Key
	name: string
	age1: string
	age2: string
	age3: string
	age4: string
	city: string
	status: string
	description: string
	action: string
}

export interface TableParams {
	pagination?: TablePaginationConfig
	filters?: Parameters<GetProp<TableProps, 'onChange'>>[1]
}
