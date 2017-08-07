import * as React from 'react';
import { Form, Input, Button } from 'antd'
import classNames from 'classNames'
const FormItem = Form.Item
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { emailRegTest } from '../util/validator'
import RegisterStyle from '../less/Register.less'
import { connect } from 'react-redux'
import { LoginActions } from '../src/redux/actions'
import { IUcState } from '../src/redux/reducers/index';

const creator: any = Form.create()

interface IRegisterProps extends React.Props<Register> {
  form?: WrappedFormUtils;
  signUp?: typeof LoginActions.signUp;
}

interface IRegisterState {

}

const mapStateToProps = (state: IUcState) => ({

})



@connect (mapStateToProps, {
    signUp: LoginActions.signUp
})
@creator
export default class Register extends React.Component<IRegisterProps, IRegisterState> {
  constructor() {
    super()
    this.state = {

    }
  }

  checkEmail  = (rule, value, callcack) => {
    if (value && !emailRegTest(value)) {
      callcack('The input is not valid E-mail!')
    } else {
      callcack()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll( (err, values)=> {
      if (err) {
        return
      }
      console.log('1')
      this.props.signUp(values.email)
    })
  }

  render() {
    let { getFieldDecorator } = this.props.form
    // const formItemLayout = {
    //   wrapperCol: {
    //     xs: {span: 24},
    //     sm: {span: 14}
    //   }
    // }
    return (
      <div className={RegisterStyle.backgroundImg}>
        <h1 className={RegisterStyle.title}>Sign Up Free</h1>
        <Form className={RegisterStyle.form} onSubmit={this.handleSubmit}>
          {/* <FormItem className={classNames(RegisterStyle.formItemWidth, RegisterStyle.formItemMarginBottom)} {...formItemLayout}> */}
          <FormItem className={classNames(RegisterStyle.formItemWidth, RegisterStyle.formItemMarginBottom)}>
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: 'please input your email!' },
                { validator: this.checkEmail }]
            })(<Input  className={RegisterStyle.formItemHeight} placeholder="Enter your email" />)}
          </FormItem>
          <FormItem> 
            <Button type="primary" htmlType="submit" className={classNames(RegisterStyle.button, RegisterStyle.formItemHeight)}>Sign Up Free</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}