import testConfig from './testing'
import uatConfig from './uating'
import proing from './proing'

declare var UCENV
let output: typeof testConfig = null

if (UCENV == 'DEVTEST') {
  output = testConfig
} else if (UCENV == 'DEVUAT') {
  output = uatConfig
} else if (UCENV == 'DEVPRO') {
  output = proing
}
export default output