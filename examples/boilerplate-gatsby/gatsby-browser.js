/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import { useTheme, getTheme } from '@scaleds/components/dist/theme'
useTheme({
  shape: {
    borderRadius: 24
  }
})


console.log('theme', getTheme())
