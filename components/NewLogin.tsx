import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { loginAction } from '../src/redux/actions/LoginAction';
import { IUcState } from '../src/redux/reducers/index';
import NewLoginStyle from '../less/NewLogin.less'
import Radio from './Radio/Radio';

interface IloginProps extends React.Props<login> {
  loginAction: typeof loginAction;
}

interface IloginState {
  userName: string;
  userPassword: string;
  RadioValue: string;
}

const mapStateToProps = (state: IUcState) => {
  return {
  }
}

@connect(mapStateToProps, { loginAction: loginAction })
export default class login extends React.Component<IloginProps, IloginState> {
  constructor() {
    super()
    this.state = {
      userName: '',
      userPassword: '',
      RadioValue: 'A'
    }
  }

  loginHandle = () => {
    this.props.loginAction(this.state.userName, this.state.userPassword)
  }

  userNameHandle = (e: React.SyntheticEvent) => {
    let inputEvent = e.target as any
    // this.setState({
    //   userName: inputEvent.value,
    //   userPassword: this.state.userPassword
    // })
    this.setState(Object.assign({}, this.state, {
      userName: inputEvent.value
    }))
  }

  passwordHandle = (e: React.SyntheticEvent) => {
    let inputEvent = e.target as any
    // this.setState({
    //   userName: inputEvent.value,
    //   userPassword: this.state.userPassword
    // })
    this.setState(Object.assign({}, this.state, {
      userPassword: inputEvent.value
    }))
  }

  changeAlert = (e) => {
    this.setState(Object.assign({}, this.state, {
      RadioValue: e.target.value
    }))
  }

  render() {
    console.log('='+JSON.stringify(NewLoginStyle))
    let { RadioValue } = this.state
    return (
        <div>
          {RadioValue}
          <Radio name={'lzl'} value={RadioValue} changeHandle={this.changeAlert}>
            <option value="A">First Option</option>
            <option value="B">Secend Option</option>
            <option value="C">Third Option</option>
          </Radio>
          <Button type="primary">hello </Button>
      </div>
    )
  }
}