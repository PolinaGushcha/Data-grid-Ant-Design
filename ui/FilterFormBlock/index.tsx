'use state'

import { FilterTwoTone } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import { useDataContext } from 'context/DataContextProvider'
import { useState } from 'react'
import 'styles/ui/filterFormBlock.styles.css'

export const FilterFormBlock = () => {
	const [state, setState] = useState(4)
	const filtersArr = Array.from({ length: state }, (_, i) => String.fromCharCode(97 + i))
	const { filterDatatContext } = useDataContext()

	return (
		<Form initialValues={{ remember: true }} autoComplete='off' className='filterForm'>
			{filtersArr.map((el, id) => (
				<Form.Item key={id} label={`Filter ${el.toUpperCase()}`} name={`filter${el}`}>
					{id == 0 ? (
						<Input onChange={e => filterDatatContext(e.target.value)} placeholder='Input' className='filterForm__input' />
					) : (
						<Select placeholder='Input' className='filterForm__select'>
							<Select.Option value='option1'>Table cell text</Select.Option>
							<Select.Option value='option2'>Table cell text</Select.Option>
							<Select.Option value='option3'>Table cell text</Select.Option>
						</Select>
					)}
				</Form.Item>
			))}
			<Button
				iconPosition='start'
				icon={<FilterTwoTone />}
				className='filterForm__btn'
				type='default'
				onClick={() => setState(prev => (prev < 6 ? ++prev : prev))}
			>
				More Filters
			</Button>
		</Form>
	)
}
