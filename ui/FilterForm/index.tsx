'use state'

import { FilterTwoTone } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import { useState } from 'react'
import 'styles/filterForm.styles.css'

export const FilterForm = () => {
	const [state, setState] = useState(4)
	const filtersArr = Array.from({ length: state }, (_, i) => String.fromCharCode(97 + i))

	return (
		<Form initialValues={{ remember: true }} autoComplete='off' className='filterForm'>
			{filtersArr.map((el, id) => (
				<Form.Item key={id} label={`Filter ${el.toUpperCase()}`} name={`filter${el}`}>
					{id == 0 ? (
						<Input onChange={e => console.log(e.target.value)} placeholder='Input' className='filterForm__input' />
					) : (
						<Select placeholder='Input' className='filterForm__select'>
							<Select.Option value='option1'>Option 1</Select.Option>
							<Select.Option value='option2'>Option 2</Select.Option>
							<Select.Option value='option3'>Option 3</Select.Option>
						</Select>
					)}
				</Form.Item>
			))}
			<Button iconPosition='start' icon={<FilterTwoTone />} className='filterForm__btn' type='default' onClick={() => setState(prev => ++prev)}>
				More Filters
			</Button>
		</Form>
	)
}
