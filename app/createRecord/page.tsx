'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { AppstoreOutlined, CloseOutlined, LeftOutlined } from '@ant-design/icons'
import { Avatar, Button, Flex, Layout, Tabs, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { CreateRecordSection } from 'components'
import DataContextProvider from 'context/DataContextProvider'
import { useRouter } from 'next/navigation'
import 'styles/pages/main.styles.css'

export default function CreateRecord() {
	const { Title } = Typography
	const router = useRouter()

	const handleReturn = () => {
		router.back()
	}
	return (
		<StyleProvider layer>
			<Layout className='createRecord__main'>
				<Header className='createRecord__header'>
					<Button className='createRecord__btn' iconPosition='start' type='default' onClick={handleReturn} icon={<LeftOutlined />}>
						Go Back
					</Button>
					<CloseOutlined onClick={handleReturn} />
				</Header>
				<Content>
					<Flex className='createRecord__container'>
						<Title className='createRecord__title' level={2}>
							<Avatar icon={<AppstoreOutlined />} size={72} />
							Create Record
						</Title>
						<DataContextProvider>
							<Tabs
								className='tableTabs'
								style={{ marginTop: 7 }}
								type='card'
								items={new Array(6).fill(null).map((_, i) => {
									const id = String(i + 1)
									return {
										label: 'Tab title',
										key: id,
										children: <CreateRecordSection />
									}
								})}
							/>
						</DataContextProvider>
					</Flex>
				</Content>
			</Layout>
		</StyleProvider>
	)
}
