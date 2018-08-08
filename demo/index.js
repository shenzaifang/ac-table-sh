import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AcTable } from '../src/index';

var btns = [
    {
        'label':'上一步',
        'type': "last",
        'func': function (data) {
            console.log('----------',data)
        }
    },
    {
        'label':'下一步',
        'type': "next",
        'func': function (data) {
            console.log('----------',data)
        }
    }
]

class Demo extends Component {
    constructor(props){
        super(props)
    }
    render () {
        let parent = {
            data:true
        };
        let className = 'clcclclclclcl';
        return (
            <AcTable btns={btns} parent={parent} className={className}/>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
