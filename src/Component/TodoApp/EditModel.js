import React ,{useState}  from 'react'
import  "./EditModel.css";
function EditModel(props) {
    const [editedValue,setEditedValue]=useState(props.initialvalue)
    const handleChange=(event)=>{        
            setEditedValue(event.target.value)   
            console.log(event.target.value)
    }
    const handleSave=()=>{
        props.onSave(editedValue)
    }
    const handleCancel=()=>{
        props.onCancel()
    }
  return (
    <div className='editbox'>
      <h1>Edit value</h1>
      <input type='text' value={editedValue} onChange={handleChange}/>
      <button onClick={handleSave}>save</button>
      <button onClick={handleCancel}>cancel</button>
    </div>
  )
}

export default EditModel
