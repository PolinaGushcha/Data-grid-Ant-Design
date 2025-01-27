import { LeftOutlined, RightOutlined, SaveOutlined, StopOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Tabs } from 'antd'
import { useDataContext } from 'context/DataContextProvider'
import { useRouter } from 'next/navigation'
import 'styles/components/createRecordSection.styles.css'

import { FORMINPUTSCOUNT, RECORDTABSCOUNT } from '@/constants/countsOfElements.constants'
import { createMenuList } from '@/services'
import { FormItem } from '@/ui'

export const CreateRecordSection = () => {
	const router = useRouter()
	const { addDataContext } = useDataContext()

	const handleReturn = () => {
		router.back()
	}

	const handleSave = () => {
		addDataContext()
		router.back()
	}

	return (
		<Flex className='createRecordSection'>
			<Tabs
				className='createRecordSection__tabs'
				tabPosition='right'
				items={createMenuList({ arrayLength: RECORDTABSCOUNT, label: 'Section Name' })}
			/>
			<Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} 
			initialValues={{ remember: true }} autoComplete='off' className='form'>
				{new Array(FORMINPUTSCOUNT).fill(null).map((_, id) => {
					return <FormItem key={id} />
				})}

				<Flex className='form__footer'>
					<Flex className='form__footer__btnContainer'>
						<Button className='form__footer__btnContainer__btn' type='default' 
						icon={<LeftOutlined />} iconPosition='start'>
							Previous
						</Button>
						<Button className='form__footer__btnContainer__btn' type='default' 
						icon={<RightOutlined />} iconPosition='end'>
							Next
						</Button>
					</Flex>
					<Flex className='form__footer__btnContainer'>
						<Button className='form__footer__btnContainer__btn' type='default' 
						icon={<StopOutlined />} iconPosition='start' onClick={handleReturn}>
							Cancel
						</Button>
						<Button className='form__footer__btnContainer__btn' type='default' 
						icon={<SaveOutlined />} iconPosition='start' onClick={handleSave}>
							Save
						</Button>
					</Flex>
				</Flex>
			</Form>
		</Flex>
	)
}
