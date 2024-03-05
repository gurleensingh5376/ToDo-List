import React from 'react'
import style from './CSS Modules/TodoCss.module.css'
export default function Addtodo() {
  return (
    <div className={`${style.m}`}>
       <h3 className={style.f}> Add ToDo </h3>
     <div className='card'>
        <div className='card-body'> 

      <div className='row'>
        <div className='col-3'>
            <input type='text' className='form-control' placeholder='Title'>
        </input>
        </div>
        <div className='col-6'>
            <input type='text' className='form-control' placeholder='Desc.'>
        </input>
        </div>
        <div className='col-3'>
            <input type='text' className='form-control' placeholder='Remark'>
        </input>
        </div>
       </div>
       <button type="button" class="btn btn-dark mt-2 ">Add</button>
        </div></div></div>
  )
}
