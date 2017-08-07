import React from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../src/redux/actions/LoginAction';
import { IUcState } from '../src/redux/reducers/index';
 

interface IloginProps extends React.Props<login> {
  loginAction: typeof loginAction;
}

 const mapStateToProps = (state: IUcState) => {
  return {
      mobile: (state => state.author.mobile)(state),
  }
}

@connect(mapStateToProps, {loginAction: loginAction})
export default class login extends React.Component<IloginProps , any> {
  constructor() {
    super()
    this.state = {
    }
  }

  login = () => {
    this.props.loginAction('lzl', '123456')
  }

  render() {
    return (
      <div>
        <div>用户名</div>
        <div>密码</div>
        <button onClick={this.login}>登陆</button>
      </div>
    )
  }
}