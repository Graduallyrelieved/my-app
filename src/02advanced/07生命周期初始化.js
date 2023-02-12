import React,{ Component } from 'react'

export default class App extends Component {
    state = {
        myname: 'allwk'
    }
    UNSAFE_componentWillMount () {
        console.log('will',this.state.myname,document.getElementById("nanme"))
        this.setState({
            myname: 'Allwk'
        })
    }
    componentDidMount() {
        console.log('will',this.state.myname,document.getElementById("nanme"));

    }
    render() {
        return (
            <div >
                <span id='nanme'>  {this.state.myname}</span>
            </div>
        )
    }
}
