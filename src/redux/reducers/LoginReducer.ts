import UserDataRecord from '../../../Records/UserDataRecord';
import UserLoginRecord from '../../../Records/UserLoginRecord';

import Const from '../const';


const userDataDefalut= new UserDataRecord()

export function author ( state = userDataDefalut, {type, payload} ) {
  switch (type) {
    case Const.LOGINSERVER.LOGIN:
      return setUserDataHandle(state, payload)
    default:
      return state
  }
}

function setUserDataHandle (state: UserDataRecord, {data}) {
  console.log('dispacher==='+state)
  return state.with({
    usData: state.usData.with(new UserLoginRecord(data))
  })
}