/*
 * @Author: wangkun wangkun@axhome.com.cn
 * @Date: 2023-01-28 15:11:03
 * @LastEditors: wangkun wangkun@axhome.com.cn
 * @LastEditTime: 2023-01-28 15:34:43
 * @FilePath: \myapp\src\index\18非受控组件 copy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export default class APP extends Component {
  // myusername = React.createRef()
  state = {
    username: 'fdfdfdf',
  }
  render() {
    return (
      <div>
        18非受控组件
        <div>
          <input
            type="text"
            value={this.state.username}
            onChange={(evt) => {
              console.log('onchang', evt.target.value)
              this.setState({
                username: evt.target.value,
              })
            }}
          ></input>
          <button
            onClick={() => {
              console.log(this.state.username)
            }}
          >
            提交
          </button>
          <button
            onClick={() => {
              this.setState({
                username: '',
              })
            }}
          >
            重置
          </button>

          {/* <Child myvalue={this.state.username}></Child> */}
        </div>
      </div>
    )
  }
}
