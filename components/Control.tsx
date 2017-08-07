import * as React from 'react';
import { List, Record } from 'immutable'
import { Answer } from './Paper'

interface OptionsItemRecordParams {
  value?: string
  label?: string
}

export class OptionsItemRecord extends Record({
  value: '-1',
  label: ''
}) {
  value: string
  label: string
  static defaultValue = new OptionsItemRecord

  constructor (params?: OptionsItemRecordParams) {
    params ? super(params) : super()
  }

  with (params: OptionsItemRecordParams): OptionsItemRecord {
    return this.merge(params) as OptionsItemRecord
  }
}

interface IControlProps extends React.Props<Control> {
  options: List<OptionsItemRecord>;
  title: string;
  onChange: (data: {ckey: string, an: Answer}) => any
  ckey: number;
}

interface IControlState {
  checked: '1' | '2' | '3' | '4' | '-1';
}

export default class Control extends React.Component<IControlProps, IControlState> {

  constructor () {
    super()
    this.state = {
      checked: '-1'
    }
  }

  render () {
    const { title, options, ckey } = this.props
    const { checked } = this.state
    const answer = options.find(v => v.value === checked) || {label: ''}
    return (
      <div>
        <div>{title}</div>
        <div>
          {options.map((v, index) => (
            <div key={index}>
              <input type="radio" value={v.value} checked={checked === v.value} onChange={this.changeHandle} id={ckey + v.value}/>
              <label htmlFor={ckey + v.value} >{v.label}</label>
            </div>
          ))}
        </div>
        <div>You answer is {answer.label}</div>
      </div>
    )
  }

  changeHandle = (e: React.SyntheticEvent) => {
    let inputEvent = e.target as any
    this.setState(Object.assign({}, this.state, {
      checked: inputEvent.value
    }))
    // this.props.onChange({
    //   ckey: '' + this.props.ckey,
    //   an: new Answer({
    //     id: inputEvent.value,
    //     value: this.props.options.get(parseInt(inputEvent.value, 10) - 1).label
    //   })
    // })
    this.props.onChange({
      ckey: '' + this.props.ckey,
      an: new Answer({
        id: ''+this.props.ckey,
        value: inputEvent.value
      })
    })
  }
}