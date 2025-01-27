import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'

export type ICreateTabs = {
	arrayLength: number
	label: string
	children?: React.ReactElement
	icon?: React.FunctionComponentElement<Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>>
}
