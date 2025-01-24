'use client'

import Icon from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const LogoSvg = () => (
	<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d={
				'M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 ' +
				'0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 ' +
				'15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z'
			}
			fill='#1677FF'
		/>
	</svg>
)

const LogoComponent = () => <Icon component={LogoSvg} />

const LogoIcon: React.FC = () => (
	<Space>
		<LogoComponent />
	</Space>
)

export default LogoIcon
