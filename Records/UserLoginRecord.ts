import { Record } from 'immutable'


type UserLoginRecordParams = {
  id?: string;
  mobile?: string;
  userNmae?: string;
  userPassword?: string;
}

export default class UserLoginRecord extends Record ({
  id: '',
  mobile: '',
  userName: '',
  userPassword: ''
}) {
  id: string
  mobile: string
  userName: string
  userPassword: string
  
  constructor (params?: UserLoginRecordParams) {
    params? super(params): super()
  }

   with (value: UserLoginRecordParams): UserLoginRecord {
    return this.merge(value) as UserLoginRecord
  }
}
