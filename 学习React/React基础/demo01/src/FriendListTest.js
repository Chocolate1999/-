import React, { Component, Fragment } from 'react';

class FriendListTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 'Chocolate',
      list: ['mick', 'jack']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputVal} onChange={this.inputChange.bind(this)}></input>
          <button onClick={this.addFriendsList.bind(this)}>增加小朋友</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li 
                  key={index + item}
                  onClick={this.deleteItem.bind(this,index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  // 监听输入框
  inputChange(e){
    this.setState({
      inputVal: e.target.value,

    })
  }
  // 增加列表项
  addFriendsList(e){
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
  // 删除列表项
  deleteItem(index){
    let list = this.state.list;
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}

export default FriendListTest;