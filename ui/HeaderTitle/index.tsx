import { BugOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import 'styles/headerTitle.styles.css'

export const HeaderTitle = () => {
	const { Title } = Typography
	const router = useRouter()

	const handleRouteLocation = () => {
		router.push('/createRecord')
	}

	return (
		<Flex className='headerTitle'>
			<Title className='headerTitle__text' level={2}>
				Page Title
			</Title>
			<Flex className='headerTitle__buttons'>
				<Button className='headerTitle__btn' type='default' iconPosition='start' icon={<PlusOutlined />} onClick={handleRouteLocation}>
					Create New
				</Button>
				<Button className='headerTitle__btn' type='default' iconPosition='start' icon={<BugOutlined />}>
					Action 2
				</Button>
				<Button className='headerTitle__btn' type='default' iconPosition='start' icon={<MoreOutlined />} />
			</Flex>
		</Flex>
	)
}
