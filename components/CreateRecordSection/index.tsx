import { LeftOutlined, RightOutlined, SaveOutlined, StopOutlined } from '@ant-design/icons'
import { Button, Checkbox, Divider, Flex, Form, FormProps, Input, Select, Tabs } from 'antd'
import { useRouter } from 'next/navigation'
import 'styles/createRecordSection.styles.css'
import { FieldType } from 'types/createRecordSection.types'
import { useDataContext } from '@/store/DataContextProvider'

const onFinish: FormProps<FieldType>['onFinish'] = values => {
	console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
	console.log('Failed:', errorInfo)
}

export const CreateRecordSection = () => {
	const router = useRouter()
	const { addDataContext } = useDataContext()

	const handleReturn = () => {
		router.back()
	}

	const handleSave = () => {
		addDataContext()
	}

	return (
		<Flex className='createRecordSection'>
			<Tabs
				className='createRecordSection__tabs'
				tabPosition='right'
				items={new Array(5).fill(null).map((_, i) => {
					const id = String(i + 1)
					return {
						label: 'Section Name',
						key: id
					}
				})}
			/>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
				className='form'
			>
				<Flex className='form__container'>
					<h4 className='form__title'>Section Name</h4>
					<div className='form__items'>
						<Form.Item<FieldType> className='form__items__item' name='input1'>
							<p>Information Label A</p>
							<Input className='form__items__item__input' placeholder='Type' />
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item' name='input2'>
							<p>Information Label</p>
							<Input className='form__items__item__input' placeholder='Type' />
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item' name='input3'>
							<p>Information Label</p>
							<Input className='form__items__item__input' placeholder='Type' />
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item' name='input4'>
							<p>Information Label</p>
							<Select placeholder='Select' className='form__items__item__select'>
								<Select.Option value='sample'>Table cell text</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item' name='input5'>
							<p>Information Label</p>
							<Select placeholder='Select' className='form__items__item__select'>
								<Select.Option value='sample'>Table cell text</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item' name='input5'>
							<p>Information Label</p>
							<Select placeholder='Select' className='form__items__item__select'>
								<Select.Option value='sample'>Table cell text</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item__checkbox' name='checkbox1' valuePropName='checked'>
							<p>Information Label</p>
							<Checkbox />
						</Form.Item>

						<Form.Item<FieldType> className='form__items__item__checkbox' name='checkbox2' valuePropName='checked'>
							<p>Information Label</p>
							<Checkbox />
						</Form.Item>
					</div>
				</Flex>
				<Divider className='form__divider' />
				<Flex className='form__footer'>
					<Flex className='form__footer__btnContainer'>
						<Button className='form__footer__btnContainer__btn' type='default' icon={<LeftOutlined />}
						 iconPosition='start'>
							Previous
						</Button>
						<Button className='form__footer__btnContainer__btn' type='default' icon={<RightOutlined />} iconPosition='end'>
							Next
						</Button>
					</Flex>
					<Flex className='form__footer__btnContainer'>
						<Button className='form__footer__btnContainer__btn' type='default' icon={<StopOutlined />}
						 iconPosition='start' onClick={handleReturn}>
							Cancel
						</Button>
						<Button className='form__footer__btnContainer__btn' type='default' icon={<SaveOutlined />}
						 iconPosition='start' onClick={handleSave}>
							Save
						</Button>
					</Flex>
				</Flex>
			</Form>
		</Flex>
	)
}
