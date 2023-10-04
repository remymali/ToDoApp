
import React, { Component } from 'react';
import "./TodoApp.css";
import"./EditModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt  } from '@fortawesome/free-solid-svg-icons';
import EditModel from './EditModel';
export default class TodoApp extends Component {
    state={
        input: '',
        item:[],
        editIndex:-1,
        isEditModelOpen:false
    }
    Change=(event)=>{
        this.setState({
            input:event.target.value
        })
        // console.log(this.state.input);
    };
    storeItems=(event)=>{
        event.preventDefault();
        const {input,item}=this.state;
        if(input.trim()!=="")
        {
          
        this.setState({
            item:[...item,input],
            input:'' 
        });
        }
        
        
    };
    editSave=key=>{
      const {item,editIndex}=this.state
      const allitems=[...item]
      allitems[editIndex]=key
      this.setState({
        item:allitems,
        isEditModelOpen:false
      })
    }
    cancelEdit=(key)=>{
      this.setState({
        isEditModelOpen:false
      })
    }
    deleteItem=key=>{
      // const allItem=this.state.item
      // allItem.splice(key,1)
      // this.setState({
      //   item:allItem
      // })

      this.setState({
        item:this.state.item.filter((item,index)=>index!==key)
      })
    }
    editItem=key=>{
      this.setState({
        editIndex:key,
        isEditModelOpen:true
      })
      
    }
  render() {
    const  {input,item,editIndex,isEditModelOpen}=this.state

    return (
      <div className='todo-container'>
        
       <form className='input-section'  onSubmit={this.storeItems}>
       <h1>Todo App</h1>
       
        <input
            type='text'
            placeholder='Enter Items...'
            value={input} 
            onChange={this.Change}
           
          />
        
      </form>

        <ul>
       
          {item.map((item,index)=>(
            <li key={index}>{item} <FontAwesomeIcon  className="editIcon" icon={ faEdit  } onClick={()=>this.editItem(index)}/><FontAwesomeIcon  className="icon" icon={ faTrashAlt  } onClick={()=>this.deleteItem(index)}/></li>
          ))}
                
        </ul>
        {isEditModelOpen && (<EditModel initialvalue={item[editIndex]} onSave={this.editSave} onCancel={this.cancelEdit}/>)}
      </div>
      
    )
  }
}
