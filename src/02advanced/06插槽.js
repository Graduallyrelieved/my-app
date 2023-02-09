import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>1111</div>
          <div>2222</div>
          <div>3333</div>
        </Child>
      </div>
    )
  }
}
