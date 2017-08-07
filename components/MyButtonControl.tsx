import React from 'react'
import ChoiceQuestion from './ChoiceQuestion';
import { List } from 'immutable'
import { ChoiceRecord } from 'records';
import { answer } from '../interface/answer';

interface IMyButtonControlProps extends React.Props<MyButtonControl> {

}

interface IMyButtonControl {
  items: List<answer>;
}

export default class MyButtonControl extends React.Component<IMyButtonControlProps, IMyButtonControl> {
  constructor() {
    super()
    this.state = {
      items: List<answer>()
    }
    this.acceptAnswer = this.acceptAnswer.bind(this)
  }


  acceptAnswer (result: answer) {
    const answers: List<answer> = this.state.items
    console.log('====' + JSON.stringify(answers))
    let target: boolean = true
    let newAnswers = answers.map((answer, index) => {
      if (answer.id === result.id) {
        answer.value = result.value
        target = false
      }
      return answer
      // answer.value = (answer.id === result.id) ? result.value: answer.value
    })
    if (target) {
      this.setState({
        items: answers.push(result)
      })
    } else {
      this.setState({
        items: List<answer>(newAnswers)
      })
    }
  }

  answerRender() {
    return (
      <span>
        {
          this.state.items.map((item, id) =>
            <span key={id}> {item.value} </span>
          )
        }
      </span>
    )
  }

  render() {
    const choices = [{ id: '1', name: '1', label: '选项A', value: 'A', checked: false },
    { id: '2', name: '2', label: '选项B', value: 'B', checked: false },
    { id: '3', name: '2', label: '选项C', value: 'C', checked: false },
    { id: '4', name: '2', label: '选项D', value: 'D', checked: true }
    ]
    const choiceList = List<ChoiceRecord>(choices)
    return (
      <div>
        <ChoiceQuestion id={'1'} questionName={'test '} selectChoice={choiceList} onComplete={this.acceptAnswer} ></ChoiceQuestion>
        <div>
          您选择的是答案: {this.answerRender()}
        </div>
      </div>
    )
  }
}