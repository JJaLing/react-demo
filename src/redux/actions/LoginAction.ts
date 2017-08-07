import CONST from '../const'

export function loginAction (userName: string, password: string) {
  return {
    type: CONST.LOGINSERVER.LOGIN,
    payload: {userName, password}
  }
}

export function signUp (email: string) {
  return {
    type: CONST.REGISTERSERVER.REGISTER,
    payload: {email}
  }
}