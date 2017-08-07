import * as React from 'react'

interface IRadioProps extends React.Props<Radio> {
  changeHandle: (e: any) => any
  name: string
  value: string
}

interface IRadioState {
  value: string;
}

export default class Radio extends React.Component<IRadioProps, IRadioState> {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  changehandle = (e: React.SyntheticEvent) => {
    this.props.changeHandle(e)
  }
  render() {
    // var value = this.props.value || this.state.value
    // return (
    //   <div>
    //     {
    //       React.Children.map(this.props.children, (child: any, index) => {
    //         return (
    //           <label>
    //             <input type="radio" name={this.props.name} value={child.props.value} checked={child.props.value == value} onChange={this.changehandle} />
    //             {child.props.children}
    //           </label>
    //         )
    //       }
    //       )
    //     }
    //   </div>
    // )

    var value = this.props.value || this.state.value
    var children = React.Children.map (this.props.children, (child:any, i)=> {
      return (
        <label>
          <input type="radio" name={this.props.name} value={child.props.value} checked={child.props.value == value} onChange={this.changehandle} />
          {child.props.children}
        </label>
      )
    })
    return (<span>{children}</span>)
  }
}