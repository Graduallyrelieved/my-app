import React,{ Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: ['1111','2222','333','353','5435','38763','3854','73','354354','3543','365','15454','365435','1321','654']
    }
    componentDidMount() {
        new BetterScroll('wtt')
    }
    render() {
        return (
            <div>
                <div id='wtt' style={{ height: '100px',background:'red' ,overflow:'hidden'}}>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
            
        )
    }
}
