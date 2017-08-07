import { emailReg } from './reg';
//返回true说明校验成功，存在该匹配
function emailRegTest (str: string): boolean {
  return emailReg.test(str)
}

export { emailRegTest }