import type { ThemeConfig } from 'antd'
import { THEMECOLORPRIMARY, THEMEFONTSIZE } from 'constants/countsOfElements.constants'

const theme: ThemeConfig = {
	token: {
		fontSize: THEMEFONTSIZE,
		colorPrimary: THEMECOLORPRIMARY
	}
}

export default theme
