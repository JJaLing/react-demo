import { Record } from 'immutable'
import UserLoginRecord from './UserLoginRecord';

type UserDataRecordParams = {
  usData?: UserLoginRecord;
}

export default class UserDataRecord extends Record ({
  usData: new UserLoginRecord()
}) {
  usData: UserLoginRecord
  
  constructor (params?: UserDataRecordParams) {
    params? super(params): super()
  }
  
   with (value: UserDataRecordParams): UserDataRecord {
    return this.merge(value) as UserDataRecord
  }
}
