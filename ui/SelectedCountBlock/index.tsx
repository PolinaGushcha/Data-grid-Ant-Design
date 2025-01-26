import { BugFilled, InsertRowRightOutlined, MoreOutlined, SaveFilled } from '@ant-design/icons'
import { Button, Divider, Flex } from 'antd'
import 'styles/components/pageTable.styles.css'
import { ISelectedCountBlock } from 'types/selectedCountBlock.types'

export const SelectedCountBlock: React.FC<ISelectedCountBlock> = ({ selectedRowKeysLength, tableDataLength }) => {
	return (
		<>
			<p className='pageTable__selectedCount'>
				{selectedRowKeysLength} of {tableDataLength} Selected
			</p>
			<Flex className='pageTable__btnContainer' gap={25}>
				<Button className='pageTable__btnContainer__btn' type='default' icon={<BugFilled />} />
				<Button className='pageTable__btnContainer__btn' type='default' icon={<BugFilled />} />
				<Button className='pageTable__btnContainer__btn' type='default' icon={<MoreOutlined />} />
				<Divider className='pageTable__btnContainer__divider' type='vertical' />
				<Button className='pageTable__btnContainer__btn' type='default' icon={<SaveFilled />} />
				<Button className='pageTable__btnContainer__btn' type='default' icon={<InsertRowRightOutlined />} />
				<Button className='pageTable__btnContainer__btn' type='default' icon={<MoreOutlined />} />
			</Flex>
		</>
	)
}
