import React, { Component } from 'react';
import './style.css';
var AcTable = class extends Component {
    static defaultProps = {
        className: '',
        parent: {},
        btns:[],
    };

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.last = this.last.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    next(call){
        const data = {
            value:this.state.value
        };
        console.log('点击下一步');
        call(data);
    }
    last(call){
        const data = {
            value:this.state.value
        };
        console.log('点击上一步');
        call(data)
    }
    render() {
        console.log("parent = ", this.props.parent);
        const listItems = this.props.btns;
        return (
            <div className={this.props.className}>
                <div>
                    姓名：<input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                {
                    listItems.map((item,i)=>{
                        return (
                            <button key={i} onClick={()=>this[item.type](item.func)}>{item.label}</button>
                        )
                    })
                }


            </div>

        );
    }
};
export {
    AcTable
};

/**
参数

type: PropTypes.string, 后续拓展，暂无
label: PropTypes.string, 显示文字
onClick:PropTypes.fun,   按钮回调事件
data:PropTypes.object   回调事件回带数据Object格式

<div style={{width:"500px",height:"600px",padding:"10px"}}>
<ButtonBrand />  品牌色
<ButtonDefault />  通用按钮
<ButtonDefaultLine /> 通用按钮带边框
<ButtonDefaultAlpha /> 通用按钮无背景
<ButtonWarning />   告警
<ButtonDanger />  危险

</div>
**/
