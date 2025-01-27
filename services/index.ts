import { TABLEDATACOUNT } from 'constants/countsOfElements.constants'
import { MOCKTABLEDATA } from 'constants/pageTable.constants'
import { DataType } from 'types/pageTable.types'
import { ICreateTabs } from 'types/services.types'

export const createMenuList = ({ arrayLength, label, children, icon }: ICreateTabs) => {
	return new Array(arrayLength).fill(null).map((_, i) => {
		const id = String(i + 1)
		return { label, key: id, children, icon }
	})
}

export const ArrayMockTableData = Array.from<DataType>({ length: TABLEDATACOUNT }).map<DataType>((_, key) => {
	return { ...MOCKTABLEDATA, key: key }
})
