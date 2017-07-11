import { Record } from 'immutable'

type choiceParams = {
  id?: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
}

export default class ChoiceRecord extends Record ({
  id: '',
  name: '',
  label: '',
  value: '',
  checked: false
}) {
  id: string
  name: string
  label: string
  value: string
  checked: boolean 

  constructor (params?: choiceParams) {
    params? super(params): super()
  }
}