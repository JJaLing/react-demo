import * as React from 'react'
import { List }from 'immutable'
import { ChoiceRecord } from 'records'
import AnswerRadioInput from './AnswerRadioInput';
import { answer } from '../interface/answer';


interface IChoiceQuestionProps extends React.Props<ChoiceQuestion> {
  id: string;
  questionName: string;
  selectChoice: List<ChoiceRecord>;
  onComplete: (result: answer) => any;
}

interface IChoiceQuestionState {
  id: string;
  value: string;
}

export default class ChoiceQuestion extends React.Component<IChoiceQuestionProps, IChoiceQuestionState> {
  constructor (props: IChoiceQuestionProps) {
    super(props)
    this.state = {
        id: props.id,
        value: ''
    }
  }

  choiceChangeHandle = (value) => {
    // this.setState({
    //   id: this.props.id,
    //   value: event.target.value
    // })
    this.setState(Object.assign(this.state, {
      value: value
    }))
    this.props.onComplete({id: this.state.id, value: value})

  }

  renderChoices () {
    return this.props.selectChoice.map((choice, id) => 
        <AnswerRadioInput key={id} id={choice.id} name={choice.name} label={choice.label} value={choice.value} checked={this.state.value === choice.value} onChange={this.choiceChangeHandle}></AnswerRadioInput>
      )
  }
  render () {
    let { id, questionName } = this.props
    return (
      <div>
        <div>
          <label>{ id }.</label>
          <label>{ questionName } </label>
        </div>
        { this.renderChoices() }
      </div>
    )
  }
}