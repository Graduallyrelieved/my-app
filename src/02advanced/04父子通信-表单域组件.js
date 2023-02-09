/*
 * @Author: wangkun wangkun@axhome.com.cn
 * @Date: 2023-01-29 17:01:49
 * @LastEditors: wangkun wangkun@axhome.com.cn
 * @LastEditTime: 2023-01-30 13:21:51
 * @FilePath: \myapp\src\02advanced\04父子通信-表单域组件.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

class Filed extends Component {
  render() {
    return (
      <div style={{ background: 'yellow' }}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            console.log(evt, 'evt')
            this.props.onChangeEvent(evt.target.value)
          }}
        ></input>
      </div>
    )
  }
}
export default class App extends Component {
  state = {
    username: '',
    password: '',
  }
  render() {
    return (
      <div>
        登录页面
        <Filed
          label="用户名"
          type="text"
          onChangeEvent={(value) => {
            console.log(value)
            this.setState({
              username: value,
            })
          }}
        />
        <Filed
          label="密码"
          type="password"
          onChangeEvent={(value) => {
            console.log(value)
            this.setState({
              password: value,
            })
          }}
        />
        <button
          onClick={() => {
            console.log(this.state.username, this.state.password)
          }}
        >
          登录
        </button>
        <button>取消</button>
      </div>
    )
  }
}
