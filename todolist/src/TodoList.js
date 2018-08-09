import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';



class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

/* handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list})
  }
*/
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接收父组件传递过来的参数

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list})
  }

  getTodeItems() {
    return (
      this.state.list.map((item,index) => {
        return (
           <TodoItem 
             delete={this.handleDelete} 
             key={index} 
             content={item} 
             index={index}
           />
        )      
      })
    )
  }

  render() {
    //jsx语法
    return (
      <React.Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodeItems()}
        </ul>
      </React.Fragment>
    );
  }
}

export default TodoList;
