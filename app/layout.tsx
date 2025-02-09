import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import 'styles/globals.css'
import theme from 'theme'

const geistSans = localFont({
	src: '../fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: '../fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata: Metadata = {
	title: 'Data grid ant design',
	description: 'Polina Gushcha'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ConfigProvider theme={theme}>
					<AntdRegistry>{children}</AntdRegistry>
				</ConfigProvider>
			</body>
		</html>
	)
}
