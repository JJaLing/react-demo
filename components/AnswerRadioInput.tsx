import * as React from 'react'
import AnswerRadioInputStyle from '../less/AnswerRadioInput.less'
import _ from 'lodash'

interface IAnswerRadioInputProps extends React.Props<AnswerRadioInput> {
  id?: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange: (value) => any
}

interface IAnswerRadioInputState {
  checked: boolean;
  id: string;
  name: string;
}

export default class AnswerRadioInput extends React.Component<IAnswerRadioInputProps, IAnswerRadioInputState> {
  public static defaultProps: IAnswerRadioInputProps = {
    id: null,
    name: 'test',
    label: 'test',
    value: 'test',
    checked: false,
    onChange: null
  }
  constructor (props: IAnswerRadioInputProps) {
    super(props)
    var id = props.id ? props.id : _.uniqueId('radio-')
    this.state = {
        checked: props.checked,
        id: id,
        name: id
    }

  }

  changeHandle = (event) => {
    let checked = event.target.checked;
    this.setState({
      id: this.state.id,
      name: this.state.name,
      checked: checked
    })
    if (checked) {
      this.props.onChange(event.target.value)
    }
  }

  componentWillReceiveProps (nextProps: IAnswerRadioInputProps) {
    this.setState({
      id: this.state.id,
      name: this.state.name,
      checked: nextProps.checked
    })
  }


  render () {

    let { id, name, value, label } = this.props

    return (
      <div className={AnswerRadioInputStyle.top} >
        <label htmlFor={id}>
        <input type="radio" name={name} id={id} value={value} checked={this.state.checked} onChange={this.changeHandle}/>
        {label}
        </label>
      </div>
    )
  }
}