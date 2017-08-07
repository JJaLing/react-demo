import { author } from './LoginReducer';
import UserLoginRecord from '../../../Records/UserLoginRecord';

export default {
  author
}

export interface IUcState {
  author: UserLoginRecord
}