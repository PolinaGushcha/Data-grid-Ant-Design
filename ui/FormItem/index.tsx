import { Checkbox, Divider, Flex, Form, Input, Select } from 'antd'
import 'styles/components/createRecordSection.styles.css'
import { FieldType } from 'types/createRecordSection.types'

export const FormItem = () => {
	return (
		<>
			<Flex className='form__container'>
				<h4 className='form__title'>Section Name</h4>
				<div className='form__items'>
					<Form.Item<FieldType> className='form__items__item'>
						<p>Information Label A</p>
						<Input className='form__items__item__input' placeholder='Type' />
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item'>
						<p>Information Label</p>
						<Input className='form__items__item__input' placeholder='Type' />
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item'>
						<p>Information Label</p>
						<Input className='form__items__item__input' placeholder='Type' />
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item'>
						<p>Information Label</p>
						<Select placeholder='Select' className='form__items__item__select'>
							<Select.Option value='sample'>Table cell text</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item'>
						<p>Information Label</p>
						<Select placeholder='Select' className='form__items__item__select'>
							<Select.Option value='sample'>Table cell text</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item'>
						<p>Information Label</p>
						<Select placeholder='Select' className='form__items__item__select'>
							<Select.Option value='sample'>Table cell text</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item__checkbox' valuePropName='checked'>
						<p>Information Label</p>
						<Checkbox />
					</Form.Item>

					<Form.Item<FieldType> className='form__items__item__checkbox' valuePropName='checked'>
						<p>Information Label</p>
						<Checkbox />
					</Form.Item>
				</div>
			</Flex>
			<Divider className='form__divider' />
		</>
	)
}
