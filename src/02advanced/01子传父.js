/*
 * @Author: wangkun wangkun@axhome.com.cn
 * @Date: 2023-01-29 10:53:00
 * @LastEditors: wangkun wangkun@axhome.com.cn
 * @LastEditTime: 2023-01-29 16:50:48
 * @FilePath: \myapp\src\02advanced\01子传父.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.event()
          }}
        >
          click
        </button>
        <span>chhh</span>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: 'yellow', width: '200px' }}>
        <ul>
          <li>111111111</li>
          <li>111111111</li>
          <li>111111111</li>
          <li>111111111</li>
          <li>111111111</li>
          <li>111111111</li>
          <li>111111111</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    isShow: true,
  }
  handler = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
    console.log('穿过来的值')
  }
  render() {
    return (
      <div>
        <Navbar event={this.handler} />
        {/* <button>click</button> */}
        {this.state.isShow && <Sidebar />}
      </div>
    )
  }
}
