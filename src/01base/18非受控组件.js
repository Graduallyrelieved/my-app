import React, { Component } from 'react'

export default class APP extends Component {
  myusername = React.createRef()
  render() {
    return (
      <div>
        18非受控组件
        <div>
          <input ref={this.myusername} defaultValue="ddddd"></input>
          <button
            onClick={() => {
              console.log(this.myusername.current.value)
            }}
          >
            提交
          </button>
          <button
            onClick={() => {
              this.myusername.current.value = ''
            }}
          >
            取消
          </button>
        </div>
      </div>
    )
  }
}
