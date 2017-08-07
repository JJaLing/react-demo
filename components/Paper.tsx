import * as React from 'react'
import Control, { OptionsItemRecord } from './Control';
import { List } from 'immutable'

import { Record } from 'immutable'


type answerParams = {
  id?: string;
  value?: string;
}

export class Answer extends Record ({
  id: '',
  value: ''
}) {

  id: string
  value: string
  constructor (params?: answerParams) {
    params? super(params): super()
  }
  
  with (value: answerParams): Answer {
    return this.merge(value) as Answer
  }
}


interface IPaperProps extends React.Props<Paper> {

}

interface IPaperState {
  answers: List<Answer>
}

export default class Paper extends React.Component<IPaperProps, IPaperState> {
  constructor() {
    super()
    this.state = {
      answers: List<Answer>()
    }
  }

  changeSubmit = (data: {ckey: string, an: Answer}) => {
    const { ckey, an } = data
    this.setState({
      answers: this.state.answers.set(parseInt(ckey), an)
    })
    return null
  }

  render() {
    const question = List<OptionsItemRecord>([{
      label: '第一题',
      value: '1'
    },
    {
      label: '第二题',
      value: '2'
    },
    {
      label: '第三题',
      value: '3'
    },
    {
      label: '第四题',
      value: '4'
    }
    ])
    const questions = List<any>([{q:question,title:'第一题'},{q:question,title:'第二题'},{q:question,title:'第三题'}])
    return (
      <div>
        {
        questions.map( (v, index) => (
          <Control options={v.q} title={v.title} key={index} onChange={this.changeSubmit} ckey={index}></Control>
        ))
        }
        <div>put your answer {JSON.stringify(this.state.answers.toJS())}</div>
      </div>
    )
  }
}