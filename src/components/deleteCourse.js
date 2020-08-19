import React, { Component } from 'react';

class Deleteit extends React.Component {
    constructor(){
    this.state = {

    }
  }

  // shorter & readable 
  delete(item){
    const data = this.state.data.filter(i => i.id !== item.id)
    this.setState({data})
  }

  

  render(){
    const listItem = this.state.data.map((item)=>{
        return <div key={item.id}>
        <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
      </div>
    })
    return <div>
        {listItem}
    </div>
  }
}

React.render(<Deleteit />, document.getElementById('container'));
